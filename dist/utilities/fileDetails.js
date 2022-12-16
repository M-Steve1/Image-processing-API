"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExt = exports.getFileName = void 0;
const getFileName = (input) => {
    const splitFilePath = input.split(".");
    // The path without the extension name
    const filePath = splitFilePath[0];
    // Getting the file name alone.
    let fileName = "";
    for (let i = filePath.length - 1; i > 0; i--) {
        if (filePath[i] === "/" || filePath[i] === "\\") {
            break;
        }
        else {
            fileName += filePath[i];
        }
    }
    fileName = fileName.split("").reverse().join("");
    return fileName;
};
exports.getFileName = getFileName;
const getFileExt = (input) => {
    const splitFilePath = input.split(".");
    let fileExt = splitFilePath[splitFilePath.length - 1];
    fileExt = "." + fileExt;
    return fileExt;
};
exports.getFileExt = getFileExt;
