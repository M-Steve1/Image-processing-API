import express, { NextFunction } from 'express';
import NodeCache from 'node-cache';
import path from 'path';
import { getFileName } from '../utilities/fileDetails';
import { getFileExt } from '../utilities/fileDetails';

const myCache = new NodeCache();

export const cache = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  const key = req.url;
  const cachedResponse = myCache.get(key) as string;
  const input: string = path.resolve(`images/full/${req.query.filename}`);
  const fileName = getFileName(input);
  const fileExt = getFileExt(input);

  if (cachedResponse) {
    res.status(200).sendFile(cachedResponse as string);
  } else {
    const output = path.resolve(
      `images/resized/${fileName}_${req.query.width}x${req.query.height}${fileExt}`
    );
    myCache.set(key, output, 600);
    next();
  }
};
