const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


app.listen(3000, function () {
    console.log("server started at 3000");
});

//
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/homepage.html");
});
app.get('/programs', function (req, res) {
    res.sendFile(__dirname + "/public/programs.html");
});
app.get('/impact', function (req, res) {
    res.sendFile(__dirname + "/public/impact.html");
});
//
app.get('/pdf-fund', function (req, res) {
    res.sendFile(__dirname + "/public/pdf-fundraiser.html");
});
app.get('/pdf-girls', function (req, res) {
    res.sendFile(__dirname + "/public/pdf-girls.html");
});
app.get('/pdf-programs', function (req, res) {
    res.sendFile(__dirname + "/public/pdf-programs.html");
});
app.get('/pdf-about', function (req, res) {
    res.sendFile(__dirname + "/public/pdf-about.html");
});


const pdfs = {
    
}

app.get("/pdf/:id", (req, res) =>{
    const {id} = req.params;
    const filename = pdfs[id]
    if (!fileName) {
    return res.status(404).send("PDF not found");
  }

  const filePath = path.join(__dirname, "pdfs", fileName); 
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error sending PDF");
    }
  });
})
