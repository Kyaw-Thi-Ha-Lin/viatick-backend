import { prisma } from "../prismaClient";
import { transformData } from "../utils/transformData";
import { getQueryDate } from "../utils/helpers";
import { generateHourMap } from "../utils/generateHourMap";
import { ChartData } from "../interfaces/chartData";

export async function getRecycleSummary(): Promise<{
  labels: string[];
  chartData: ChartData<number>[];
}> {
  try {
    const [startOfDayMMT, endOfDayMMT] = getQueryDate();

    const allData = await prisma.recycling.findMany({
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

    const { hourMap: recyclingHourMap, labels: recyclingLabels } =
      generateHourMap(allData, endOfDayMMT, ["nonRecyclable", "recyclable"]);

    return {
      labels: recyclingLabels,
      chartData: transformData(
        recyclingHourMap,
        ["nonRecyclable", "recyclable"],
        ["Non-Recyclable", "Recyclable"]
      ),
    };
  } catch (error) {
    throw new Error("Failed to fetch recycle summary");
  }
}
