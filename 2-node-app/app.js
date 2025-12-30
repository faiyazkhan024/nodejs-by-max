const http = require("http");
const fs = require("fs");

const PORT = 3000;

/* ---------- HTML TEMPLATES ---------- */

const messagePage = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Enter Message</title>
    <style>
      * {
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Ubuntu, sans-serif;
      }

      body {
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f7f7f8;
      }

      .chat-form {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        background-color: #ffffff;
        border-radius: 28px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        width: 512px;
        max-width: 90%;
      }

      .chat-form input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 10px 12px;
        background: transparent;
      }

      .chat-form button {
        border: none;
        cursor: pointer;
        background-color: #10a37f;
        color: #ffffff;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        transition: background-color 0.2s ease, transform 0.1s ease;
      }

      .chat-form button:hover {
        background-color: #0e8f6f;
      }

      .chat-form button:active {
        transform: scale(0.95);
      }
    </style>
  </head>
  <body>
    <form class="chat-form" action="/message" method="POST">
      <input
        type="text"
        name="message"
        placeholder="Type your message..."
        required
      />
      <button type="submit">➤</button>
    </form>
  </body>
</html>
`;

const fallbackPage = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Page</title>
    <style>
      * {
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Ubuntu, sans-serif;
      }

      body {
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #f7f7f8, #eef1f5);
      }

      .container {
        padding: 32px 40px;
        background-color: #ffffff;
        border-radius: 16px;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        text-align: center;
      }

      h1 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }

      p {
        margin-top: 8px;
        color: #6b7280;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Hello from my Node.js Server!</h1>
      <p>Server is up and running 🚀</p>
    </div>
  </body>
</html>
`;

/* ---------- SERVER ---------- */

const server = http.createServer((req, res) => {
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
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
