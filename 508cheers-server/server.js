const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.listen(3001, function () {
  console.log("server started at 3001");
});

mongoose.connect("mongodb://localhost:27017/508cheers", {})
    .then(function(db){
        console.log("-Database Connected-")
    });

const partnerSchema = {
    name : {
        type: String,
        required: true
    },
    img : {
        type: String
    }
}
const Partner = mongoose.model("Partner", partnerSchema);

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
  "1": "/pdfs/pdf1.pdf",
  "2": "pdfs/pdf2.pdf",
  "3": "pdfs/pdf3.pdf",
  "4": "pdfs/pdf4.pdf",
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

