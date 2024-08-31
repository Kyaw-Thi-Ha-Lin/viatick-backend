import { prisma } from "../prismaClient";
import { getQueryDate } from "../utils/helpers";
import carbonFootprintData from "../config/carbonFootprintConfig.json";

interface CarbonFootprintConfig {
  categories: {
    low: {
      min: number;
      max: number;
    };
    medium: {
      min: number;
      max: number;
    };
    high: {
      min: number;
      max: number;
    };
  };
}

export async function getCarbonFootPrint(): Promise<{
  percentage: string;
  carbonData: CarbonFootprintConfig;
}> {
  try {
    const [startOfDayMMT, endOfDayMMT] = getQueryDate();
    const lastRow = await prisma.carbonFootprint.findFirst({
      where: {
        date: {
          gte: startOfDayMMT,
          lte: endOfDayMMT,
        },
      },
      orderBy: {
        date: "desc",
      },
    });
    let carbon: number = 0;
    if (lastRow) {
      carbon = lastRow.value;
    }

    return {
      percentage: carbon.toFixed(2),
      carbonData: carbonFootprintData,
    };
  } catch (error) {
    throw new Error("Failed to fetch carbonFoorPrint");
  }
}
