export default function writeImage({
  data,
  debug,
  format,
  height,
  width,
  quality
}: {
  data:
    | number[]
    | number[][]
    | number[][][]
    | Uint8Array
    | Uint8Array[]
    | Uint8Array[][]
    | Uint8ClampedArray
    | Uint8ClampedArray[]
    | Uint8ClampedArray[][];
  debug?: boolean;
  format: "jpeg" | "JPEG" | "jpg" | "JPG" | "png" | "PNG";
  height: number;
  width: number;
  quality?: number;
}): {
  data: ArrayBuffer | Buffer;
  height: number;
  width: number;
};
