import sharp from 'sharp';

export const imageProcessor = (
  input: string,
  output: string,
  width: number,
  height: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    sharp(input)
      .resize({ width: width, height: height })
      .toFile(output, (err) => {
        if (err) {
          resolve('error');
        } else {
          resolve(output);
        }
      });
  });
};
