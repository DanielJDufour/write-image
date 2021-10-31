const jpeg = require("jpeg-js");
const { PNG } = require("pngjs");
const toImageData = require("to-image-data");

module.exports = function writeImage({ data, debug = false, format, height, width, quality = 85 }) {
  if (!format) throw new Error(`[write-image] please specify a format, "JPG", or "PNG`);

  // normalize format
  format = format.replace(/^\./, "").toUpperCase();
  if (debug) console.log(`[write-image] format is "${format}"`);

  const imageData = toImageData({ data, height, width });
  if (debug) console.log(`[write-image] image data is`, imageData);

  if (height === undefined || height === null) height = imageData.height;
  if (width === undefined || width === null) width = imageData.width;

  let result;
  if (format === "PNG") {
    const png = new PNG({ filterType: 4, height, width });
    png.data = imageData.data;
    if (debug) console.log(`[write-image] png is`, png);
    const buffer = PNG.sync.write(png);
    if (debug) console.log(`[write-image] wrote buffer of ${buffer.byteLength} bytes`);
    result = { data: buffer, height, width };
  } else if (format === "JPG") {
    const encoded = jpeg.encode(imageData, quality).data;
    if (debug) console.log("`[write-image] jpeg.encode returned", encoded);
    result = { data: encoded, height, width };
  }
  if (debug) console.log(`[write-image] returning`, result);
  return result;
};
