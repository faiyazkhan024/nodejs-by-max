const path = require("path");

const express = require("express");

const { products } = require("../controllers/products");

const router = express.Router();

router.get("/", products);

module.exports = router;
