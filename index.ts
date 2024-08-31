import express, { Request, Response } from "express";
import { prisma } from "./prismaClient";
import { energyRouter } from "./routers/energy";
import { recycleRouter } from "./routers/recycle";
import { waterRouter } from "./routers/water";
import { carbonRouter } from "./routers/carbon";
import { abnormalRouter } from "./routers/abnormal";

const cors = require("cors");

const app = express();
app.use(cors());

app.use("/energy", energyRouter);
app.use("/recycle", recycleRouter);
app.use("/water", waterRouter);
app.use("/carbon", carbonRouter);
app.use("/abnormal", abnormalRouter);

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
