import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function AbnormalitySeeder() {
  await prisma.abnormality.createMany({
    data: [
      {
        item: "Laptop Charger",
        status: "Plug is Open",
        type: "asset",
        date: new Date(),
      },
      {
        item: "Laptop Charger",
        status: "Plug is Closed",
        type: "asset",
        date: new Date(),
      },
      {
        item: "Laptop Charger",
        status: "Plug is Open",
        type: "asset",
        date: new Date(),
      },
      {
        item: "Laptop Charger",
        status: "Plug is Open",
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: "Plug is Closed",
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: "Plug is Closed",
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: "Plug is Open",
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: "Plug is Closed",
        type: "asset",
        date: new Date(),
      },
      {
        item: "Phone Charger",
        status: "Plug is Closed",
        type: "asset",
        date: new Date(),
      },
    ],
  });
}
export default AbnormalitySeeder;
