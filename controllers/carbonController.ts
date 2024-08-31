import { Request, Response } from "express";
import { getCarbonFootPrint } from "../models/CarbonFootprint";

export async function carbonSummary(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const summary = await getCarbonFootPrint();
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
