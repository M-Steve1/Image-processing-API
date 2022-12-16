"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const resizeImage = (req, res) => {
    const input = path_1.default.resolve(`images/full/${req.query.filename}`);
    const output = path_1.default.resolve(`images/resized/${req.query.filename}`);
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    (0, sharp_1.default)(input)
        .resize({ width: width, height: height })
        .toFile(output, (err, info) => {
        if (err) {
            // should be res.status().send() not res.send().status()
            res.status(304).send("Something went wrong");
            console.log(err);
        }
        else {
            res.status(200).send(`Image resized ${info}`);
            return info;
        }
    });
};
exports.resizeImage = resizeImage;
