import { Request, Response } from "express";
import {
  getEnergySummary,
  getEnergyConsumption,
} from "../models/EnergySummary";

export async function summary(req: Request, res: Response): Promise<void> {
  try {
    const summary = await getEnergySummary();
    res.status(200).json({
      status: "success",
      message: "Energy summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}

export async function consumption(req: Request, res: Response): Promise<void> {
  try {
    const consumption = await getEnergyConsumption();
    res.status(200).json({
      status: "success",
      message: "Energy summary retrieved successfully",
      data: consumption,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}
