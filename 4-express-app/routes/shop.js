const path = require("path");

const express = require("express");

const appRoot = require("../utils/path");

const router = express.Router();

router.get("/", (_, res) => {
  res.sendFile(path.join(appRoot, "views", "shop.html"));
});

module.exports = router;
