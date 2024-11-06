/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const path = require("path");
const fs = require("fs");

const directory = path.resolve(__dirname, "input.txt");
const outputDirectory = path.resolve(__dirname, "output.txt");

const readableStream = fs.createReadStream(directory, {
  highWaterMark: 15,
});
readableStream.on("readable", () => {
  try {
    const writableStream = fs.createWriteStream(outputDirectory, {
      flags: "a",
    });
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.error(error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
