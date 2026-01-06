const products = [];

exports.getAddProduct = (_, res) =>
  res.render("add-product", {
    pageTitle: "Add Product",
    css: ["form"],
    isAddProduct: true,
  });

exports.postAddProduct = (req, res) => {
  products.push({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  res.redirect("/");
};

exports.products = (_, res) => {
  res.render("shop", {
    pageTitle: "Shop",
    css: ["products"],
    isShop: true,
    products: products,
    hasProducts: products.length > 0,
  });
};
