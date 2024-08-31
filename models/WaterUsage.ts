import { prisma } from "../prismaClient";
import { getQueryDate } from "../utils/helpers";
import { transformData } from "../utils/transformData";
import { generateHourMap } from "../utils/generateHourMap";
import { ChartData } from "../interfaces/chartData";

export async function getWaterLevel(): Promise<{
  labels: string[];
  chartData: ChartData<number>[];
}> {
  try {
    const [startOfDayMMT, endOfDayMMT] = getQueryDate();

    const allData = await prisma.waterUsage.findMany({
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
    const { hourMap: waterLevelHourMap, labels: waterLevelLabels } =
      generateHourMap(allData, endOfDayMMT, ["waterLevel"]);

    return {
      labels: waterLevelLabels,
      chartData: transformData(
        waterLevelHourMap,
        ["waterLevel"],
        ["Water Level"]
      ),
    };
  } catch (error) {
    throw new Error("Failed to fetch recycle summary");
  }
}

export async function getWaterUsage(): Promise<{
  percentage: string;
  waterLevel: number;
}> {
  try {
    const [startOfDayMMT, endOfDayMMT] = getQueryDate();

    const lastRow = await prisma.waterUsage.findFirst({
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
    let usagePercentage: number = 0;
    let waterLevel: number = 0;
    if (lastRow) {
      waterLevel = lastRow.waterLevel;
      const waterUsed = 100 - waterLevel;
      usagePercentage = (waterUsed / 100) * 100;
    }

    return {
      percentage: usagePercentage.toFixed(2),
      waterLevel: waterLevel,
    };
  } catch (error) {
    throw new Error("Failed to fetch recycle summary");
  }
}
