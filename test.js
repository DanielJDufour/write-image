const fs = require("fs");
const test = require("flug");
const findAndRead = require("find-and-read");
const toImageData = require("to-image-data");
const xdim = require("xdim");
const readim = require("readim");
const writeImage = require("./write-image");

test("jpg to png", async ({ eq }) => {
  const jpg = findAndRead("flower.jpg");
  const { height, width, pixels } = await readim({ data: jpg });
  const result = writeImage({ data: pixels, debug: false, format: "png", height, width });
  fs.writeFileSync("jpg-to-png.png", result.data);
  eq(result.height, height);
  eq(result.width, width);
  eq(Buffer.isBuffer(result.data), true);
});

test("png to jpg", async ({ eq }) => {
  const png = findAndRead("flower.png");
  const { height, width, pixels } = await readim({ data: png });
  const result = writeImage({ data: pixels, debug: false, format: "jpg", height, width });
  fs.writeFileSync("png-to-jpg.jpg", result.data);
  eq(result.height, height);
  eq(result.width, width);
  eq(Buffer.isBuffer(result.data), true);
});
