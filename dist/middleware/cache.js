"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const path_1 = __importDefault(require("path"));
const fileDetails_1 = require("../utilities/fileDetails");
const fileDetails_2 = require("../utilities/fileDetails");
const myCache = new node_cache_1.default();
const cache = (req, res, next) => {
    const input = path_1.default.resolve(`images/full/${req.query.filename}`);
    if ((0, fileDetails_1.doesFileExist)(input)) {
        const key = req.url;
        const cachedResponse = myCache.get(key);
        const fileName = (0, fileDetails_1.getFileName)(input);
        const fileExt = (0, fileDetails_2.getFileExt)(input);
        const output = path_1.default.resolve(`images/resized/${fileName}_${req.query.width}x${req.query.height}${fileExt}`);
        if (cachedResponse && (0, fileDetails_1.doesFileExist)(output)) {
            res.status(200).sendFile(cachedResponse);
        }
        else {
            myCache.set(key, output, 600);
            next();
        }
    }
    else {
        throw 'Error: File does not exist';
    }
};
exports.cache = cache;
