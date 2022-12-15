import express from "express";
import { resizeImage } from "../controllers/resizeImgController";
const resizeRoutes = express.Router();

resizeRoutes.get("/", resizeImage);

export default resizeRoutes;
