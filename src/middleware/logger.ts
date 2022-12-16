import express, { NextFunction } from 'express';

export const logger = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  const fileName = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  console.log(`You resized ${fileName} to size: ${width}x${height}`);
  next();
};
