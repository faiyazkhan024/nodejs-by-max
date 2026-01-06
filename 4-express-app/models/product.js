const fs = require("fs");
const path = require("path");

const rootPath = require("../utils/path");

const productsPath = path.join(rootPath, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(productsPath, (err, fileContent) => {
    if (err) cb([]);
    else cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor({ id, title, imageUrl, description, price }) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(
        productsPath,
        JSON.stringify(products),
        (err) => err && console.log(err)
      );
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
