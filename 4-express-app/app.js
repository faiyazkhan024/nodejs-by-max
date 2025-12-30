const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");

const appRoot = require("./utils/path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(appRoot, "public")));

app.use("/admin", require("./routes/admin"));
app.use(require("./routes/shop"));

app.use((_, res) => {
  res.status(404).sendFile(path.join(appRoot, "views", "404.html"));
});

app.listen(3000);
