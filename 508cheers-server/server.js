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

app.use(cors());
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
const defaultPdfTitles = {
  1: "Fundraiser",
  2: "Girls Empowerment",
  3: "Program Offerings",
  4: "C.H.E.E.R.S.",
};

app.get("/pdf/:id", (req, res) => {
  const { id } = req.params;
  const serveFile = (filePath) => {
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error sending PDF");
      }
    });
  };

  Pdf.findOne({ slot: Number(id) })
    .then((doc) => {
      if (doc && doc.url) {
        const uploadedPath = doc.url.startsWith("/uploads/")
          ? path.join(__dirname, "public", doc.url.replace("/uploads/", "uploads/"))
          : path.join(__dirname, doc.url);
        if (fs.existsSync(uploadedPath)) {
          return serveFile(uploadedPath);
        }
      }
      const fileName = pdfs[id];
      if (!fileName) {
        return res.status(404).send("PDF not found");
      }
      const filePath = path.join(__dirname, fileName);
      serveFile(filePath);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error sending PDF");
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
const directorSchema = {
  name: { type: String, required: true },
  role: { type: String, default: "" },
  img: { type: String },
};
const Director = mongoose.model("Director", directorSchema);
const contentSchema = {
  key: { type: String, required: true, unique: true },
  value: { type: String, default: "" },
};
const Content = mongoose.model("Content", contentSchema);
const pdfSchema = new mongoose.Schema(
  {
    slot: { type: Number, required: true, unique: true, min: 1, max: 4 },
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);
const Pdf = mongoose.model("Pdf", pdfSchema);

function normalizeImgPath(pathStr) {
  if (!pathStr) return pathStr;
  if (pathStr.startsWith("/imgs/uploads/")) {
    return pathStr.replace("/imgs/uploads/", "/uploads/");
  }
  return pathStr;
}

// File upload setup
const uploadDir = path.join(__dirname, "public", "uploads");
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
    partners.forEach((p) => {
      p.img = normalizeImgPath(p.img);
    });
    res.json({ message: "success", data: partners });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

// Latest Facebook posts (server-side fetch)
app.get("/api/facebook/posts", async (req, res) => {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const limit = Math.min(Number(req.query.limit) || 3, 10);

  if (!pageId || !accessToken) {
    return res
      .status(501)
      .json({ message: "Facebook API not configured on server" });
  }

  const url = new URL(`https://graph.facebook.com/v19.0/${pageId}/posts`);
  url.searchParams.set(
    "fields",
    "message,created_time,permalink_url,full_picture"
  );
  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("access_token", accessToken);

  try {
    const fbRes = await fetch(url.toString());
    const text = await fbRes.text();
    if (!fbRes.ok) {
      console.error("[facebook] fetch failed", fbRes.status, text);
      return res
        .status(500)
        .json({ message: "Unable to fetch Facebook posts right now" });
    }
    const data = JSON.parse(text);
    return res.json({ message: "success", data: data.data || [] });
  } catch (err) {
    console.error("[facebook] unexpected error", err);
    return res
      .status(500)
      .json({ message: "Unable to fetch Facebook posts right now" });
  }
});

app.post("/admin/partners", requireAdmin, upload.single("img"), async (req, res) => {
  const { name } = req.body || {};
  const imgPath = req.file ? `/uploads/${req.file.filename}` : null;
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
  const imgPath = req.file ? `/uploads/${req.file.filename}` : undefined;

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

// Directors CRUD
app.get("/admin/directors", requireAdmin, async (req, res) => {
  try {
    const directors = await Director.find().sort({ name: 1 });
    directors.forEach((d) => {
      d.img = normalizeImgPath(d.img);
    });
    res.json({ message: "success", data: directors });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.post("/admin/directors", requireAdmin, upload.single("img"), async (req, res) => {
  const { name, role = "" } = req.body || {};
  const imgPath = req.file ? `/uploads/${req.file.filename}` : null;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const created = await Director.create({ name, role, img: imgPath });
    res.status(201).json({ message: "success", data: created });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.put("/admin/directors/:id", requireAdmin, upload.single("img"), async (req, res) => {
  const { id } = req.params;
  const { name, role = "", keepExistingImg } = req.body || {};
  const imgPath = req.file ? `/uploads/${req.file.filename}` : undefined;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const update = { name, role };
  if (imgPath !== undefined) {
    update.img = imgPath;
  } else if (keepExistingImg === "false") {
    update.img = null;
  }

  try {
    const updated = await Director.findByIdAndUpdate(id, update, { new: true });
    res.json({ message: "success", data: updated });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.delete("/admin/directors/:id", requireAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await Director.findByIdAndDelete(id);
    res.json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

// Admin PDFs CRUD
app.get("/admin/pdfs", requireAdmin, async (req, res) => {
  try {
    const docs = await Pdf.find();
    const slots = [1, 2, 3, 4].map((slot) => {
      const found = docs.find((d) => d.slot === slot);
      if (!found) {
        return {
          slot,
          title: defaultPdfTitles[slot] || `PDF ${slot}`,
          url: `/pdf/${slot}`,
        };
      }
      return {
        slot,
        title: found.title,
        url: normalizeImgPath(found.url),
        _id: found._id,
      };
    });
    res.json({ message: "success", data: slots });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.put("/admin/pdfs/:slot", requireAdmin, upload.single("pdf"), async (req, res) => {
  try {
    const { slot } = req.params;
    const slotNum = Number(slot);
    if (![1, 2, 3, 4].includes(slotNum)) {
      return res.status(400).json({ message: "Invalid PDF slot" });
    }
    const { title } = req.body || {};
    const update = {};
    if (title) update.title = title;
    let oldPath = null;
    const existing = await Pdf.findOne({ slot: slotNum });
    if (req.file) {
      const url = `/uploads/${req.file.filename}`;
      update.url = url;
      if (existing?.url) {
        oldPath = path.join(__dirname, "public", existing.url.replace("/uploads/", "uploads/"));
      }
    }
    if (!existing && !update.url) {
      return res.status(400).json({ message: "Upload a PDF file to set this slot" });
    }
    const updated = await Pdf.findOneAndUpdate(
      { slot: slotNum },
      {
        slot: slotNum,
        title: update.title || existing?.title || `PDF ${slotNum}`,
        url: update.url || existing?.url,
      },
      { upsert: true, new: true }
    );
    if (oldPath && fs.existsSync(oldPath)) {
      fs.unlink(oldPath, () => {});
    }
    res.json({ message: "success", data: updated });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

// Admin content (key/value)
app.get("/admin/content", requireAdmin, async (req, res) => {
  try {
    const all = await Content.find();
    const map = {};
    all.forEach((c) => {
      map[c.key] = c.value;
    });
    res.json({ message: "success", data: map });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.post("/admin/content", requireAdmin, async (req, res) => {
  const { updates } = req.body || {};
  if (!updates || typeof updates !== "object") {
    return res.status(400).json({ message: "Invalid updates payload" });
  }
  try {
    const keys = Object.keys(updates);
    await Promise.all(
      keys.map((key) =>
        Content.findOneAndUpdate(
          { key },
          { key, value: updates[key] ?? "" },
          { upsert: true, new: true }
        )
      )
    );
    const all = await Content.find();
    const map = {};
    all.forEach((c) => {
      map[c.key] = c.value;
    });
    res.json({ message: "success", data: map });
  } catch (err) {
    res.status(500).json({ message: "error", data: err });
  }
});

app.get("/get-all-partners", function (req, res) {
  // console.log("getting all partners...")
  Partner.find()
    .then((parts) => {
      parts.forEach((p) => {
        p.img = normalizeImgPath(p.img);
      });
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

app.get("/get-all-directors", function (req, res) {
  Director.find()
    .then((items) => {
      items.forEach((d) => {
        d.img = normalizeImgPath(d.img);
      });
      res.send({
        message: "success",
        data: items,
      });
    })
    .catch((err) => {
      res.send({
        message: "error",
        data: err,
      });
    });
});

app.get("/get-content", async (req, res) => {
  try {
    const all = await Content.find();
    const map = {};
    all.forEach((c) => {
      map[c.key] = c.value;
    });
    res.send({ message: "success", data: map });
  } catch (err) {
    res.status(500).send({ message: "error", data: err });
  }
});
