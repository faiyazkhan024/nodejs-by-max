const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", require("./routes/admin"));
app.use(require("./routes/shop"));

app.use((_, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
