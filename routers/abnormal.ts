import express from "express";
import { abnormal } from "../controllers/abnormalController";

const router = express.Router();

router.get("/list", abnormal);

export { router as abnormalRouter };
