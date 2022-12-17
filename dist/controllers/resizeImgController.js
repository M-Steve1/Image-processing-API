"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const fileDetails_1 = require("../utilities/fileDetails");
const fileDetails_2 = require("../utilities/fileDetails");
const resizeImage = (req, res) => {
    const input = path_1.default.resolve(`images/full/${req.query.filename}`);
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const fileName = (0, fileDetails_1.getFileName)(input);
    const fileExt = (0, fileDetails_2.getFileExt)(input);
    const output = path_1.default.resolve(`images/resized/${fileName}_${req.query.width}x${req.query.height}${fileExt}`);
    (0, sharp_1.default)(input)
        .resize({ width: width, height: height })
        .toFile(output, (err) => {
        if (err) {
            // should be res.status().send() not res.send().status()
            // res.status(304);  // the middleware should work when its is 200 code
            res.status(304).send('Something went wrong');
            console.log(res.statusCode);
        }
        else {
            res.status(200).sendFile(output);
        }
    });
};
exports.resizeImage = resizeImage;
