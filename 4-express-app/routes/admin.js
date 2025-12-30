const path = require("path");

const express = require("express");

const appRoot = require("../utils/path");

const router = express.Router();

router.get("/add-product", (_, res) => {
  res.sendFile(path.join(appRoot, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
