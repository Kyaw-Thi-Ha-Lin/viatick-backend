import express from "express";
import { carbonSummary } from "../controllers/carbonController";

const router = express.Router();

router.get("/summary", carbonSummary);

export { router as carbonRouter };
