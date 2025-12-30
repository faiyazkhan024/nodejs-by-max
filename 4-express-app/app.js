const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Hello from middleware 👋");
  next();
});

app.use((req, res, next) => {
  console.log("Hello from another middleware 👋");
  res.send("<h1>Hello from Express.js server!</h1>");
});

app.listen(3000);
