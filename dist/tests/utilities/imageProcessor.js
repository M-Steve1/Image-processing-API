"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageProcessor = void 0;
const sharp_1 = __importDefault(require("sharp"));
const imageProcessor = (input, output, width, height) => {
    return new Promise((resolve, reject) => {
        (0, sharp_1.default)(input)
            .resize({ width: width, height: height })
            .toFile(output, (err) => {
            if (err) {
                resolve("error");
            }
            else {
                resolve(output);
            }
        });
    });
};
exports.imageProcessor = imageProcessor;
