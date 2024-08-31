import { PrismaClient } from "@prisma/client";
import { subMonths, subHours } from "date-fns";
import { getRandomDate, getRandomNumber } from "../../utils/helpers";

const prisma = new PrismaClient();

async function EnergyConsumptionSeeder() {
  const today = new Date();
  const lastMonth = subMonths(today, 1);
  const last24Hours = subHours(today, 24);

  const seedDataLastMonth = Array.from({ length: 900 }, () => {
    const randomDate = getRandomDate(lastMonth, today);
    return {
      consumption: getRandomNumber(100, 1000),
      date: new Date(randomDate.getTime() + 6.5 * 60 * 60 * 1000), // Adjust for Myanmar time zone
      cost: getRandomNumber(20, 80),
    };
  });

  const seedDataLast24Hours = Array.from({ length: 100 }, () => {
    const randomDate = getRandomDate(last24Hours, today);
    return {
      consumption: getRandomNumber(100, 1000),
      date: new Date(randomDate.getTime() + 6.5 * 60 * 60 * 1000), // Adjust for Myanmar time zone
      cost: getRandomNumber(20, 80),
    };
  });

  const seedData = [...seedDataLastMonth, ...seedDataLast24Hours];

  await prisma.energyConsumption.createMany({
    data: seedData,
  });
}

export default EnergyConsumptionSeeder;
