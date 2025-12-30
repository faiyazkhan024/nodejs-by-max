const addUserPage = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add User</title>
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
        background: #f7f7f8;
      }

      .card {
        width: 360px;
        padding: 32px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
      }

      h1 {
        margin: 0 0 16px;
        text-align: center;
        font-size: 1.4rem;
      }

      input {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        border-radius: 10px;
        border: 1px solid #e5e7eb;
        outline: none;
      }

      button {
        margin-top: 12px;
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 10px;
        background: #10a37f;
        color: #ffffff;
        font-size: 1rem;
        cursor: pointer;
      }

      button:hover {
        background: #0e8f6f;
      }

      a {
        display: block;
        margin-top: 12px;
        text-align: center;
        color: #10a37f;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Add User</h1>
      <form action="/create-user" method="POST">
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          required
        />
        <button type="submit">Add User</button>
      </form>
      <a href="/users">View Users</a>
    </div>
  </body>
</html>
    `;

const usersPage = (users) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Users</title>
    <style>
      * {
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Ubuntu, sans-serif;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background: #f7f7f8;
        padding: 40px;
      }

      .container {
        max-width: 480px;
        margin: auto;
        background: #ffffff;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
      }

      h1 {
        text-align: center;
        margin-top: 0;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        padding: 10px 12px;
        background: #f3f4f6;
        border-radius: 8px;
        margin-bottom: 8px;
      }

      a {
        display: block;
        margin-top: 16px;
        text-align: center;
        color: #10a37f;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Users</h1>
      <ul>
        ${
          users.length === 0
            ? "<li>No users found</li>"
            : users.map((u) => `<li>${u}</li>`).join("")
        }
      </ul>
      <a href="/">← Back</a>
    </div>
  </body>
</html>
    `;

module.exports = {
  addUserPage,
  usersPage,
};
