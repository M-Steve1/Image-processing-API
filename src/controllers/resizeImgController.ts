import express from 'express';
import path from 'path';
import { imageProcessor } from '../tests/utilities/imageProcessor';
import { getFileName } from '../utilities/fileDetails';
import { getFileExt } from '../utilities/fileDetails';

export const resizeImage = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
    const input: string = path.resolve(`images/full/${req.query.filename}`);
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    const fileName = getFileName(input);
    const fileExt = getFileExt(input);
    const output = path.resolve(
      `image/resized/${fileName}_${req.query.width}x${req.query.height}${fileExt}`
    );

      const outputFile = await imageProcessor(input, output, width, height);
      if (outputFile === "error") res.send("Error: Something went wrong");
      else res.sendFile(outputFile)
};
