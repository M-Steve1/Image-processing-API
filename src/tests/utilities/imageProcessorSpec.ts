import path from 'path';
import { imageProcessor } from '../../utilities/imageProcessor';

describe('Test for image processing functionality', () => {
  const fileNameWithExt = 'fjord.jpg';
  const fileName = fileNameWithExt.split('.')[0];
  const fileExt = '.' + fileNameWithExt.split('.')[1];
  const width = 200;
  const height = 300;
  const input: string = path.resolve(`images/full/${fileNameWithExt}`);
  const output = path.resolve(
    `images/resized/${fileName}_${width}x${height}${fileExt}`
  );
  it(`expects input: ${input} to output: ${output}`, async () => {
    const outputFile = await imageProcessor(input, output, width, height);
    expect(outputFile).toBe(output);
  });
});
