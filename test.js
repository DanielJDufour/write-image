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
  const png = await writeImage({ data: pixels, debug: true, format: "png", height, width });
  console.log("png:", png);
  fs.writeFileSync("jpg-to-png.png", png);
});

test("png to jpg", async ({ eq }) => {
  const png = findAndRead("flower.png");
  const { height, width, pixels } = await readim({ data: png });
  const jpg = await writeImage({ data: pixels, debug: true, format: "jpg", height, width });
  console.log("jpg:", jpg);
  fs.writeFileSync("png-to-jpg.jpg", jpg);
});
