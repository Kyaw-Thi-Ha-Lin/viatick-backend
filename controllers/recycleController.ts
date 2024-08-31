import { Request, Response } from "express";
import { getRecycleSummary } from "../models/Recycling";
export async function recycle(req: Request, res: Response): Promise<void> {
  try {
    const waterLevel = await getRecycleSummary();
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
