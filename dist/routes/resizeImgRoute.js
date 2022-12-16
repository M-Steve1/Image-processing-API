"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeImgController_1 = require("../controllers/resizeImgController");
const cache_1 = require("../middleware/cache");
const resizeRoutes = express_1.default.Router();
resizeRoutes.get('/resizeimage', cache_1.cache, resizeImgController_1.resizeImage);
exports.default = resizeRoutes;
