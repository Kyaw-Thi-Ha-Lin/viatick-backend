import { prisma } from "../prismaClient";
import { transformData } from "../utils/transformData";
import { getQueryDate } from "../utils/helpers";
import { generateHourMap } from "../utils/generateHourMap";
import { ChartData } from "../interfaces/chartData";

export async function getEnergySummary(): Promise<{
  totalConsumption: number;
  totalCost: number;
  labels: string[];
  chartData: ChartData<number>[];
}> {
  try {
    const [startOfDayMMT, endOfDayMMT] = getQueryDate();
    const totalData = await prisma.energyConsumption.aggregate({
      _sum: {
        consumption: true,
        cost: true,
      },
      where: {
        date: {
          gte: startOfDayMMT,
          lte: endOfDayMMT,
        },
      },
    });

    const allData = await prisma.energyConsumption.findMany({
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
    const { hourMap: consumptionHourMap, labels: consumptionLabels } =
      generateHourMap(allData, endOfDayMMT, ["consumption"]);

    return {
      totalConsumption: totalData._sum.consumption || 0,
      totalCost: totalData._sum.cost || 0,
      labels: consumptionLabels,
      chartData: transformData(
        consumptionHourMap,
        ["consumption"],
        ["Energy Meter"]
      ),
    };
  } catch (error) {
    throw new Error("Failed to fetch energy summary");
  }
}

export async function getEnergyConsumption(): Promise<{
  consumption: number;
}> {
  try {
    const consumption = await prisma.energyConsumption.aggregate({
      _sum: {
        consumption: true,
      },
    });
    return {
      consumption: consumption._sum.consumption || 0,
    };
  } catch (error) {
    throw new Error("Failed to fetch energy consumption");
  }
}
