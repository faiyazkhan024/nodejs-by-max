const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");

const appRoot = require("./utils/path");

const app = express();

app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "views");
app.enable("view cache");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(appRoot, "public")));

app.use("/admin", require("./routes/admin"));
app.use(require("./routes/shop"));

app.use((_, res) => {
  res
    .status(404)
    .render("404", { pageTitle: "404 – Page Not Found", css: ["errors"] });
});

app.listen(3000);
