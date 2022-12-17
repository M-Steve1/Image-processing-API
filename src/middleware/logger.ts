import express, { NextFunction } from 'express';
import path from 'path';
import { doesFileExist } from '../utilities/fileDetails';

export const logger = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  const fileName = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;
  const input: string = path.resolve(`images/full/${fileName}`);

  // Checking if the file from the query parameter exist
  // before logging to the console
  if (doesFileExist(input)) {
    console.log(`You resized ${fileName} to size: ${width}x${height}`);
  }
  next();
};
