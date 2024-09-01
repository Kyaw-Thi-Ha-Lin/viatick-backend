import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function AbnormalitySeeder() {
  await prisma.abnormality.createMany({
    data: [
      {
        item: "Laptop Charger",
        status: 1,
        type: "asset",
        date: new Date(),
      },
      {
        item: "Laptop Charger",
        status: 0,
        type: "asset",
        date: new Date(),
      },
      {
        item: "Laptop Charger",
        status: 1,
        type: "asset",
        date: new Date(),
      },
      {
        item: "Laptop Charger",
        status: 1,
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: 0,
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: 0,
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: 1,
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: 0,
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: 0,
        type: "asset",
        date: new Date(),
      },
    ],
  });
}
export default AbnormalitySeeder;
