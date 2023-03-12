import { PrismaClient } from "@prisma/client";

//why can't i get this to use the TS type??
declare global {
  var prisma: any | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
