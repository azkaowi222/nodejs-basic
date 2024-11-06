const fs = require("fs");
const path = require("path");

const directory = path.resolve(__dirname, "notes.txt");

fs.readFile(directory, "UTF-8", (err, result) => {
  if (err) {
    console.error(err);
  }
  console.log(result);
});