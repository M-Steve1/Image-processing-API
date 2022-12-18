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
const path_1 = __importDefault(require("path"));
const imageProcessor_1 = require("../../utilities/imageProcessor");
describe("Test for image processing functionality", () => {
    const fileNameWithExt = 'fjord.jpg';
    const fileName = fileNameWithExt.split('.')[0];
    const fileExt = '.' + fileNameWithExt.split('.')[1];
    const width = 200;
    const height = 300;
    const input = path_1.default.resolve(`images/full/${fileNameWithExt}`);
    const output = path_1.default.resolve(`images/resized/${fileName}_${width}x${height}${fileExt}`);
    it(`expects input: ${input} to output: ${output}`, () => __awaiter(void 0, void 0, void 0, function* () {
        const outputFile = yield (0, imageProcessor_1.imageProcessor)(input, output, width, height);
        expect(outputFile).toBe(output);
    }));
});
