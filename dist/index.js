"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./middleware/logger");
const resizeImgRoute_1 = __importDefault(require("./routes/resizeImgRoute"));
const app = (0, express_1.default)();
const port = 8000;
app.use(logger_1.logger);
app.use('/api', resizeImgRoute_1.default);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
