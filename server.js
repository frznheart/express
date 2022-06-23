const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//MIDDLE WARE
//global middelware

app.use((req, res, next) => {
  console.log("middleware");
  next(); //calls the next valid middleware
});

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

app.use(express.json());

//local middleware
//third party middlware

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST");
});

app.listen(8000);
