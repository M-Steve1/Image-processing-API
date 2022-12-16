import express from 'express';
import path from 'path';
import sharp from 'sharp';
import { getFileName } from '../utilities/fileDetails';
import { getFileExt } from '../utilities/fileDetails';

export const resizeImage = (
  req: express.Request,
  res: express.Response
): void => {
  const input: string = path.resolve(`images/full/${req.query.filename}`);
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const fileName = getFileName(input);
  const fileExt = getFileExt(input);
  const output = path.resolve(`images/resized/${fileName}_${req.query.width}x${req.query.height}.${fileExt}`);

  sharp(input)
    .resize({ width: width, height: height })
    .toFormat("jpeg")
    .toFile(output, (err) => {
      if (err) {
        // should be res.status().send() not res.send().status()
        res.status(304).send('Something went wrong');
        console.log(err);
      } else {
        res.status(200).sendFile(output);
      }
    });
};
