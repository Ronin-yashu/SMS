import "dotenv/config";
import { PrismaClient } from '../prisma/generated/client/index.js';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient({
    datasourceUrl: process.env.ACCELERATE_URL,
  }).$extends(withAccelerate());
}

export const prisma = globalForPrisma.prisma;

