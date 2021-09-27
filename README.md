# write-image
Write an Image

# install
```bash
npm install write-image
```

# usage
```js
import writeImage from 'write-image';

const result = writeImage({
  // data can be structured in 1, 2 or 3 dimensional arrays
  data: [
    [123, 41, ...], // red band
    [36, 32, ...], // green band
    [46, 83, ...] // blue band
  ],

  debug: false, // default false, set to true for increased logging

  // format of the ouput
  // "JPG" or "PNG"
  format: "JPG", 

  // height of the input if you know it
  // we'll try to figure it out if not
  height: 768, 

  // width of the input if you know it
  // we'll try to figure it out if not
  width: 1024, 

  // quality of the output
  // from 0 to 100
  // only used for JPG
  // default is 85
  quality: 85
});
```
result is an object
```js
{
  // height of the image
  height: 768,

  // width of the image
  width: 1024,

  data: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 84 00 05 03 04 04 04 03 05 04 04 04 05 05 05 06 07 0c 08 07 07 07 07 0f 0b 0b 09 ... 697 more bytes>,
}
```