import path from 'path';
import { getFileExt, getFileName } from '../../utilities/fileDetails';

describe('Test for fileDetails utility', () => {
  const fileNameWithExt = 'fjord.jpg';
  const fileName = fileNameWithExt.split('.')[0];
  const fileExt = '.' + fileNameWithExt.split('.')[1];
  const input: string = path.resolve(`images/full/${fileNameWithExt}`);
  it(`Should equal filename: ${fileName}`, () => {
    expect(getFileName(input)).toEqual(fileName);
  });

  it(`Should equal file extension: ${fileExt}`, () => {
    expect(getFileExt(input)).toEqual(fileExt);
  });
});
