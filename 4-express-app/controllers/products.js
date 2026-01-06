const Product = require("../models/product");

exports.getAddProduct = (_, res) =>
  res.render("add-product", {
    pageTitle: "Add Product",
    css: ["form"],
    isAddProduct: true,
  });

exports.postAddProduct = (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });

  product.save();
  res.redirect("/");
};

exports.products = (_, res) => {
  const products = Product.fetchAll();

  res.render("shop", {
    pageTitle: "Shop",
    css: ["products"],
    isShop: true,
    products: products,
    hasProducts: products.length > 0,
  });
};
