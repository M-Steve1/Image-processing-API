import express from "express";
import { resizeImage } from "../controllers/resizeImgController";
import { cache} from "../middleware/cache";

const resizeRoutes = express.Router();

resizeRoutes.get('/resizeimage', cache, resizeImage);

export default resizeRoutes;
