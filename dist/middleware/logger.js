"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const path_1 = __importDefault(require("path"));
const fileDetails_1 = require("../utilities/fileDetails");
const logger = (req, res, next) => {
    const fileName = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    const input = path_1.default.resolve(`images/full/${fileName}`);
    // Checking if the file from the query parameter exist
    // before logging to the console
    if ((0, fileDetails_1.doesFileExist)(input)) {
        console.log(`You resized ${fileName} to size: ${width}x${height}`);
    }
    next();
};
exports.logger = logger;
