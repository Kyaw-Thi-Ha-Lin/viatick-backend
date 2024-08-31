import express from "express";
import { waterLevel, waterUsage } from "../controllers/waterController";

const router = express.Router();

router.get("/level", waterLevel);
router.get("/usage", waterUsage);

export { router as waterRouter };
