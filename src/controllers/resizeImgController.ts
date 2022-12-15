import express from "express";
import path from "path";
import sharp from "sharp";

export const resizeImage = (
  req: express.Request,
  res: express.Response
): void => {
    const input: string = path.resolve(`images/ful/${req.query.filename}`);
    const output = path.resolve(`images/resized/${req.query.filename}`);
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    sharp(input)
    .resize({width: width, height: height})
    .toFile(output, (err) => {
      if (err) {
        res.send("Something went wrong");
        console.log(err);
      } else {
        res.send("Image resized");
      }
      
    });
}