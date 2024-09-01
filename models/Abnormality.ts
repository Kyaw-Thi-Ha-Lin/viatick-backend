import { prisma } from "../prismaClient";
import { getQueryDate } from "../utils/helpers";

interface AbnormalData {
  item: string;
  status: boolean;
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
    const convertedAbnormalities = abnormalities.map((abnormality) => ({
      ...abnormality,
      status: Boolean(abnormality.status),
    }));

    return convertedAbnormalities;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch abnormalities");
  }
}
