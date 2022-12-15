import express from "express";
import path from "path";
import sharp from "sharp";

const input = path.resolve("images/full/fjord.jpg");
console.log(input);
const output = path.resolve("images/resized/fjord.jpg");
console.log(output);

export const resizeImage = (
  req: express.Request,
  res: express.Response
): void => {
  sharp(input)
  .resize({width: 200, height:300})
  .toFile(output);
  res.send("ok").status(200);
}