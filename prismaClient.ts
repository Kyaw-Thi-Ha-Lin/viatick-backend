import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import { Prisma } from "@prisma/client";
import { format } from "date-fns";

prisma.$use(
  async (
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<any>
  ) => {
    const result = await next(params);

    if (params.model === "Abnormality" && params.action === "findMany") {
      return result.map((abnormality: any) => ({
        ...abnormality,
        date: format(new Date(abnormality.date), "MM-dd-yyyy, h:mm:ss a"),
      }));
    }

    return result;
  }
);
