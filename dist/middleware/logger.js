"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    const fileName = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    console.log(`You resized ${fileName} to size: ${width}x${height}`);
    next();
};
exports.logger = logger;
