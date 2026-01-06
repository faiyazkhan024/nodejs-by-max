const path = require("path");

const express = require("express");

const router = express.Router();

const products = [];

router.get("/", (_, res) => {
  res.render("shop", {
    pageTitle: "Shop",
    css: ["products"],
    isShop: true,
    products: products,
    hasProducts: products.length > 0,
  });
});

module.exports = router;
