import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function CarbonFootprintSeeder() {
  await prisma.carbonFootprint.createMany({
    data: [
      { date: new Date(), value: 123.45 },
      { date: new Date(), value: 67.89 },
      { date: new Date(), value: 62.89 },
      { date: new Date(), value: 40.89 },
      { date: new Date(), value: 10.89 },
      { date: new Date(), value: 2.89 },
    ],
  });
}
export default CarbonFootprintSeeder;
