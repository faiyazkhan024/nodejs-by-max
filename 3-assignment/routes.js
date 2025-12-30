const { addUserPage, usersPage } = require("./templates");
const { readUsers, writeUsers } = require("./helpers");

const routes = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/" && req.method === "GET") {
    return res.end(addUserPage());
  }

  if (req.url === "/create-user" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const username = decodeURIComponent(
        body.split("=")[1]?.replace(/\+/g, " ") || ""
      ).trim();

      if (username) {
        const users = readUsers();
        users.push(username);
        writeUsers(users);
      }

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });

    return;
  }

  if (req.url === "/users") {
    const users = readUsers();

    return res.end(usersPage(users));
  }
};

module.exports = routes;
