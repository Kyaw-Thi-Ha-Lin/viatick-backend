import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function WaterUsageSeeder() {
  await prisma.waterUsage.createMany({
    data: [
      { date: new Date(), value: 300.5, waterLevel: 75.3 },
      { date: new Date(), value: 250.4, waterLevel: 60.8 },
      { date: new Date(), value: 0, waterLevel: 100.0 },
      { date: new Date(), value: 20, waterLevel: 85.0 },
    ],
  });
}
export default WaterUsageSeeder;
