import express from "express";
import { resizeImage } from "../controllers/resizeImgController";
const resizeRoutes = express.Router();

resizeRoutes.get(`/resizeimage`, resizeImage);

export default resizeRoutes;
