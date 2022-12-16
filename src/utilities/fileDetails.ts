export const getFileName = (input: string): string => {
  const splitFilePath = input.split('.');
  // The path without the extension name
  const filePath = splitFilePath[0];
  // Getting the file name alone.
  let fileName = '';
  for (let i = filePath.length - 1; i > 0; i--) {
    if (filePath[i] === '/' || filePath[i] === '\\') {
      break;
    } else {
      fileName += filePath[i];
    }
  }
  fileName = fileName.split('').reverse().join('');
  return fileName;
};

export const getFileExt = (input: string): string => {
  const splitFilePath = input.split('.');
  let fileExt: string = splitFilePath[splitFilePath.length - 1];
  fileExt = '.' + fileExt;
  return fileExt;
};
