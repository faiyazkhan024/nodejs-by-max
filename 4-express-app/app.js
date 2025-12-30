const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", require("./routes/admin"));
app.use(require("./routes/shop"));

app.use((_, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
