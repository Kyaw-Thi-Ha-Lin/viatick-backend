import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function CarbonFootprintSeeder() {
  await prisma.carbonFootprint.createMany({
    data: [
      { date: new Date(), value: 40.45 },
      { date: new Date(), value: 29.89 },
      { date: new Date(), value: 10.89 },
      { date: new Date(), value: 42.89 },
      { date: new Date(), value: 32.89 },
      { date: new Date(), value: 2.89 },
    ],
  });
}
export default CarbonFootprintSeeder;
