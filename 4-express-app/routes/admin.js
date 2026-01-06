const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/add-product", (_, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    css: ["form"],
    isAddProduct: true,
  });
});

router.post("/add-product", (req, res) => {
  products.push({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  res.redirect("/");
});

module.exports = router;
