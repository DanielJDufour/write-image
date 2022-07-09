import { writeFileSync } from "fs";
import test from "flug";
import findAndRead from "find-and-read";
import toImageData from "to-image-data";
import { transform } from "xdim";
import * as readim from "readim";
import writeImage from "./write-image";

test("jpg to png", async ({ eq }) => {
  const jpg = findAndRead("flower.jpg");
  const { height, width, pixels } = await readim({ data: jpg });
  const result = writeImage({ data: pixels, debug: false, format: "png", height, width });
  writeFileSync("jpg-to-png.ts.png", result.data as Buffer);
  eq(result.height, height);
  eq(result.width, width);
  eq(Buffer.isBuffer(result.data), true);
});

test("png to jpg", async ({ eq }) => {
  const png = findAndRead("flower.png");
  const { height, width, pixels } = await readim({ data: png });
  const result = writeImage({ data: pixels, debug: false, format: "jpg", height, width });
  writeFileSync("png-to-jpg.ts.jpg", result.data as Buffer);
  eq(result.height, height);
  eq(result.width, width);
  eq(Buffer.isBuffer(result.data), true);
});

test("png to png", async ({ eq }) => {
  const png = findAndRead("flower.png");
  const { height, width, pixels } = await readim({ data: png });
  const result = writeImage({ data: pixels, debug: false, format: "png", height, width });
  writeFileSync("png-to-png.ts.png", result.data as Buffer);
  eq(result.height, height);
  eq(result.width, width);
  eq(Buffer.isBuffer(result.data), true);
});

test("jpg to jpg", async ({ eq }) => {
  const jpg = findAndRead("flower.jpg");
  const { height, width, pixels } = await readim({ data: jpg });
  const result = writeImage({ data: pixels, debug: false, format: "jpg", height, width });
  writeFileSync("jpg-to-jpg.ts.jpg", result.data as Buffer);
  eq(result.height, height);
  eq(result.width, width);
  eq(Buffer.isBuffer(result.data), true);
});

test('JPEG', async ({ eq }) => {
  const result = writeImage({
    data: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0
    ],
    debug: false,
    format: 'JPEG',
    height: 880,
    width: 950,
    quality: 85
  });
  writeFileSync("jpeg.ts.jpg", result.data as Buffer);
});