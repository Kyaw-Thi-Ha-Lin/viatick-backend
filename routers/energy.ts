import express from "express";
import { consumption, summary } from "../controllers/energyController";

const router = express.Router();

router.get("/summary", summary);
router.get("/consumption", consumption);

export { router as energyRouter };
