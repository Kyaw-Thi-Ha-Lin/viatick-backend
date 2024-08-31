import { prisma } from "../prismaClient";
import { getQueryDate } from "../utils/helpers";

interface AbnormalData {
  item: string;
  status: string;
  type: string;
  date: Date;
}
export async function getAbnormality(): Promise<AbnormalData[]> {
  const [startOfDayMMT, endOfDayMMT] = getQueryDate();
  try {
    const abnormalities = await prisma.abnormality.findMany({
      where: {
        date: {
          gte: startOfDayMMT,
          lte: endOfDayMMT,
        },
      },
      orderBy: {
        id: "desc",
      },
      select: {
        item: true,
        status: true,
        type: true,
        date: true,
      },
    });
    return abnormalities;
  } catch (error) {
    throw new Error("Failed to fetch abnormalities");
  }
}
