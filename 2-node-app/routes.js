const fs = require("fs");
const { messagePage, fallbackPage } = require("./templates");

const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    return res.end(messagePage());
  }

  if (req.url === "/message" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const message = decodeURIComponent(
        body.split("=")[1]?.replace(/\+/g, " ") || ""
      );

      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });

    return;
  }

  res.statusCode = 200;
  res.end(fallbackPage());
};

module.exports = requestHandler;
