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
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
const resizeImgController_1 = require("../../controllers/resizeImgController");
const request = (0, supertest_1.default)(__1.default);
const re = resizeImgController_1.resizeImage;
console.log(re);
describe("Test for resize endpoint", () => {
    it("Should return a status code of 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/resizeimage?filename=icelandwaterfall.jpg&width=1000&height=500");
        expect(response.status).toBe(200);
        // console.log(response);
    }));
});
// describe("Test for image processing", () => {
//   it("should resize the image using the supplied params", async () => {
//     const response = await routes.get("/api/resizeimage?filename=icelandwaterfall.jpg&width=1000&height=500");
//     expect(response.status).toBe(304);
//     console.log(response)
//   })
// })
