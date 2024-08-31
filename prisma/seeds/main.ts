import { PrismaClient } from "@prisma/client";
import CarbonFootprintSeeder from "./CarbonFootprintSeeder";
import AbnormalitySeeder from "./AbnormalitySeeder";
import EnergyConsumptionSeeder from "./EnergyConsumptionSeeder";
import RecyclingSeeder from "./RecyclingSeeder";
import WaterUsageSeeder from "./WaterUsageSeeder";

const prisma = new PrismaClient();
async function main() {
  try {
    await CarbonFootprintSeeder();
    await AbnormalitySeeder();
    await EnergyConsumptionSeeder();
    await RecyclingSeeder();
    await WaterUsageSeeder();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
main();
