"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fileDetails_1 = require("../../utilities/fileDetails");
describe('Test for fileDetails utility', () => {
    const fileNameWithExt = "fjord.jpg";
    const fileName = fileNameWithExt.split(".")[0];
    const fileExt = "." + fileNameWithExt.split(".")[1];
    const input = path_1.default.resolve(`images/full/${fileNameWithExt}`);
    it(`Should equal filename: ${fileName}`, () => {
        expect((0, fileDetails_1.getFileName)(input)).toEqual(fileName);
    });
    it(`Should equal file extension: ${fileExt}`, () => {
        expect((0, fileDetails_1.getFileExt)(input)).toEqual(fileExt);
    });
});
