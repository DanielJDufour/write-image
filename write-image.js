const jpeg = require("jpeg-js");
const { PNG } = require("pngjs");
const toImageData = require("to-image-data");

module.exports = async function writeImage({ data, debug = false, format, height, width, quality = 85 }) {
  if (!format) throw new Error(`[write-image] please specify a format, "JPG", or "PNG`);

  // normalize format
  format = format.replace(/^\./, "").toUpperCase();
  if (debug) console.log(`[write-image] format is "${format}"`);

  const imageData = toImageData({ data, height, width });
  if (debug) console.log(`[write-image] image data is`, imageData);

  if (format === "PNG") {
    const png = new PNG({ filterType: 4, height, width });
    png.data = imageData.data;
    if (debug) console.log(`[write-image] png is`, png);
    const buffer = PNG.sync.write(png);
    return { data: buffer, height, width };
  } else if (format === "JPG") {
    const { data, height, width } = jpeg.encode(imageData, quality).data;
    return { data, height, width };
  }
};