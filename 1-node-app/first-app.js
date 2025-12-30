const fs = require("fs");

fs.writeFile("message.txt", "Hello World!", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("The file was saved!");
  }
});
