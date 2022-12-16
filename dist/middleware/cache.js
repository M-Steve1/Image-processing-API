"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const path_1 = __importDefault(require("path"));
const myCache = new node_cache_1.default();
const cache = (req, res, next) => {
    const key = req.url;
    const cachedResponse = myCache.get(key);
    if (cachedResponse) {
        res.status(200).sendFile(cachedResponse);
    }
    else {
        const output = path_1.default.resolve(`images/resized/${req.query.filename}`);
        myCache.set(key, output, 600);
        next();
    }
};
exports.cache = cache;
