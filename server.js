const express = require("express");

const app = express();
// const bodyParser = require("body-parser");

//MIDDLE WARE
//global middelware
// app.use(express.json());

app.use((req, res, next) => {
  req.body = {
    id: 1,
    name: "John",
  };
  console.log("before middleware");
  next(); //calls the next valid middleware
  // console.log("after middelware");
});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const auth_middleware = (req, res, next) => {
//   let auth_status = false;
//   if (auth_status) {
//     console.log("auth_middleware");
//     next();
//   } else {
//     res.status(401);

//     next({ err: "not authenticated" });
//   }
// };

// app.use(auth_middleware);
app.use(express.static("public"));
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST");
});

app.get("/", function (req, res) {
  console.log("hello World");
  res.send("Hello World"); //cannot send response after sending 1 response
  console.log(req.query);
});

app.use("", function (req, res) {
  console.log("404");
  res.status(404).send({ msg: "404 ERROR!! page not found" });
});

// app.use("", function (err, req, res, next) {
//   console.log(req.body);
//   res.send(err);
// });

app.listen(8000, (err, data) => {
  console.log("listening");
});
