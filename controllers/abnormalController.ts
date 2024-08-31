import { Request, Response } from "express";
import { getAbnormality } from "../models/Abnormality";
export async function abnormal(req: Request, res: Response): Promise<void> {
  try {
    const summary = await getAbnormality();
    res.status(200).json({
      status: "success",
      message: "Abnormal Data retrieved successfully",
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
