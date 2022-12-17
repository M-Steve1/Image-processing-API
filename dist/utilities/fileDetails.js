"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExt = exports.getFileName = void 0;
const fs_1 = __importDefault(require("fs"));
const getFileName = (input) => {
    const fileExist = fs_1.default.existsSync(input);
    if (!fileExist)
        throw ("File does not exist");
    const splitFilePath = input.split('.');
    // The path without the extension name
    const filePath = splitFilePath[0];
    // Getting the file name alone.
    let fileName = '';
    for (let i = filePath.length - 1; i > 0; i--) {
        if (filePath[i] === '/' || filePath[i] === '\\') {
            break;
        }
        else {
            fileName += filePath[i];
        }
    }
    fileName = fileName.split('').reverse().join('');
    return fileName;
};
exports.getFileName = getFileName;
const getFileExt = (input) => {
    const fileExist = fs_1.default.existsSync(input);
    if (!fileExist)
        throw ("File does not exist");
    const splitFilePath = input.split('.');
    let fileExt = splitFilePath[splitFilePath.length - 1];
    fileExt = '.' + fileExt;
    return fileExt;
};
exports.getFileExt = getFileExt;
