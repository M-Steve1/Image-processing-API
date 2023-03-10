import express, { NextFunction } from 'express';
import NodeCache from 'node-cache';
import path from 'path';
import { doesFileExist, getFileName } from '../utilities/fileDetails';
import { getFileExt } from '../utilities/fileDetails';

const myCache = new NodeCache();

export const cache = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  const input: string = path.resolve(`images/full/${req.query.filename}`);

  if (doesFileExist(input)) {
    const key = req.url;
    const cachedResponse = myCache.get(key) as string;
    const fileName = getFileName(input);
    const fileExt = getFileExt(input);
    const output = path.resolve(
      `images/resized/${fileName}_${req.query.width}x${req.query.height}${fileExt}`
    );

    if (cachedResponse && doesFileExist(output)) {
      res.status(200).sendFile(cachedResponse);
    } else {
      myCache.set(key, output, 600);
      next();
    }
  } else {
    throw 'Error: File does not exist';
  }
};
