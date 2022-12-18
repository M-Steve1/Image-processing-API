"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
const path_1 = __importDefault(require("path"));
const imageProcessor_1 = require("../utilities/imageProcessor");
const fileDetails_1 = require("../utilities/fileDetails");
const fileDetails_2 = require("../utilities/fileDetails");
const resizeImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const input = path_1.default.resolve(`images/full/${req.query.filename}`);
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const fileName = (0, fileDetails_1.getFileName)(input);
    const fileExt = (0, fileDetails_2.getFileExt)(input);
    const output = path_1.default.resolve(`images/resized/${fileName}_${req.query.width}x${req.query.height}${fileExt}`);
    const outputFile = yield (0, imageProcessor_1.imageProcessor)(input, output, width, height);
    if (outputFile === "error")
        res.status(500).send("Error: Something went wrong");
    else
        res.status(200).sendFile(outputFile);
});
exports.resizeImage = resizeImage;
