const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const fs = require("fs");
const env = require("dotenv").config();

// app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
  console.log("-server started at 3000");
});

mongoose
  .connect(process.env.MONGODB_URI, {dbName: "508cheers"})
  .then(function (db) {
    console.log("--Database Connected");
  })
  .catch((err) => console.log(err));

// OLD
/*
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/homepage.html");
});
app.get("/programs", function (req, res) {
  res.sendFile(__dirname + "/public/programs.html");
});
app.get("/impact", function (req, res) {
  res.sendFile(__dirname + "/public/impact.html");
});

app.get("/pdf-fund", function (req, res) {
  res.sendFile(__dirname + "/public/pdf-fundraiser.html");
});
app.get("/pdf-girls", function (req, res) {
  res.sendFile(__dirname + "/public/pdf-girls.html");
});
app.get("/pdf-programs", function (req, res) {
  res.sendFile(__dirname + "/public/pdf-programs.html");
});
app.get("/pdf-about", function (req, res) {
  res.sendFile(__dirname + "/public/pdf-about.html");
});
*/

// PDF PATh
const pdfs = {
  1: "/data/pdfs/pdf1.pdf",
  2: "/data/pdfs/pdf2.pdf",
  3: "/data/pdfs/pdf3.pdf",
  4: "/data/pdfs/pdf4.pdf",
};

app.get("/pdf/:id", (req, res) => {
  const { id } = req.params;
  const fileName = pdfs[id];
  if (!fileName) {
    return res.status(404).send("PDF not found");
  }

  const filePath = path.join(__dirname, fileName);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error sending PDF");
    }
  });
});

// PARTNERS DATASET
const partnerSchema = {
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
};
const Partner = mongoose.model("Partner", partnerSchema);

// File upload setup
const uploadDir = path.join(__dirname, "public", "imgs", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname) || "";
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`;
    cb(null, unique);
  },
});
const upload = multer({ storage });

// Basic HMAC token auth for admin actions
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const ADMIN_SECRET = process.env.ADMIN_SECRET || "change-me";
const TOKEN_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours

function signAdminToken() {
  const payload = {
    role: "admin",
    exp: Date.now() + TOKEN_TTL_MS,
  };
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(payloadB64)
    .digest("base64url");
  return `${payloadB64}.${sig}`;
}

function verifyAdminToken(token) {
  if (!token) return false;
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return false;
  const expectedSig = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(payloadB64)
    .digest("base64url");
  if (sig !== expectedSig) return false;
  try {
    const payload = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString("utf8")
    );
    if (payload.exp && Date.now() > payload.exp) return false;
    return payload.role === "admin";
  } catch (err) {
    return false;
  }
}

function requireAdmin(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.replace("Bearer ", "") : "";
  if (!verifyAdminToken(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

// Admin login
app.post("/admin/login", (req, res) => {
  const { password } = req.body || {};
  if (!ADMIN_PASSWORD) {
    return res
      .status(500)
      .json({ message: "ADMIN_PASSWORD not configured on server" });
  }
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = signAdminToken();
  res.json({ message: "success", token });
});

// Admin partner CRUD
app.get("/admin/partners", requireAdmin, async (req, res) => {
  try {
    const partners = await Partner.find().sort({ name: 1 });
    res.json({ message: "success", data: partners });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.post("/admin/partners", requireAdmin, upload.single("img"), async (req, res) => {
  const { name } = req.body || {};
  const imgPath = req.file ? `/imgs/uploads/${req.file.filename}` : null;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const created = await Partner.create({ name, img: imgPath });
    res.status(201).json({ message: "success", data: created });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.put("/admin/partners/:id", requireAdmin, upload.single("img"), async (req, res) => {
  const { id } = req.params;
  const { name, keepExistingImg } = req.body || {};
  const imgPath = req.file ? `/imgs/uploads/${req.file.filename}` : undefined;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const update = { name };
  if (imgPath !== undefined) {
    update.img = imgPath;
  } else if (keepExistingImg === "false") {
    update.img = null;
  }

  try {
    const updated = await Partner.findByIdAndUpdate(id, update, { new: true });
    res.json({ message: "success", data: updated });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.delete("/admin/partners/:id", requireAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await Partner.findByIdAndDelete(id);
    res.json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.get("/get-all-partners", function (req, res) {
  // console.log("getting all partners...")
  Partner.find()
    .then((parts) => {
      // console.log(parts);
      res.send({
        message: "success",
        data: parts,
      });
    })
    .catch((err) => {
      res.send({
        message: "error",
        data: err,
      });
    });
});
