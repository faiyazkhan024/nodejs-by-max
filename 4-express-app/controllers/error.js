exports.get404 = (_, res) =>
  res
    .status(404)
    .render("404", { pageTitle: "404 – Page Not Found", css: ["errors"] });
