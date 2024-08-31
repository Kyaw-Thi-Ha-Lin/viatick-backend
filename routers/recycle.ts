import express from "express";
import { recycle } from "../controllers/recycleController";

const router = express.Router();

router.get("/", recycle);

export { router as recycleRouter };
