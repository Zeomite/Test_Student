const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("Connected to MongoDB via Prisma"))
  .catch((error) => console.error("Error connecting to the database:", error));

module.exports = prisma;
