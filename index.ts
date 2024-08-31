import express, { Request, Response } from "express";
import { prisma } from "./prismaClient";
import { energyRouter } from "./routers/energy";
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/report", energyRouter);

app.get("/info", (req: Request, res: Response) => {
  res.json({ msg: "Viatick API" });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const shutDown = async () => {
  await prisma.$disconnect();
  server.close(() => {
    console.log("Viatick API closed.");
    process.exit(0);
  });
};

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
