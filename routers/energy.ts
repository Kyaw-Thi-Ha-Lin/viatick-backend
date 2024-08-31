import express from "express";
import { consumption, summary } from "../controllers/energyController";
import { waterLevel, waterUsage } from "../controllers/waterController";
import { recycle } from "../controllers/recycleController";
import { carbonSummary } from "../controllers/carbonController";
import { abnormal } from "../controllers/abnormalController";

const router = express.Router();

router.get("/energy-summary", summary);
router.get("/energy-consumption", consumption);
router.get("/water-level", waterLevel);
router.get("/water-usage", waterUsage);
router.get("/recycle", recycle);
router.get("/carbon", carbonSummary);
router.get("/abnormal", abnormal);

export { router as energyRouter };
