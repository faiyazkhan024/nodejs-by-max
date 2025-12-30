const fs = require("fs");
const path = require("path");

const USERS_FILE = path.join(__dirname, "users.json");

const readUsers = () => {
  try {
    const data = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

module.exports = {
  readUsers,
  writeUsers,
};
