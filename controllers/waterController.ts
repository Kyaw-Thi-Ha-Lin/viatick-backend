import { Request, Response } from "express";
import { getWaterLevel, getWaterUsage } from "../models/WaterUsage";
export async function waterLevel(req: Request, res: Response): Promise<void> {
  try {
    const waterLevel = await getWaterLevel();
    res.status(200).json({
      status: "success",
      message: "Water Level retrieved successfully",
      data: waterLevel,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}

export async function waterUsage(req: Request, res: Response): Promise<void> {
  try {
    const waterLevel = await getWaterUsage();
    res.status(200).json({
      status: "success",
      message: "Water usage retrieved successfully",
      data: waterLevel,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}
