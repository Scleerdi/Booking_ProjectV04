import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPropertyById = async (id) => {
  try {
    const property = await prisma.property.findUnique({
      where: { id },
    });
    return property;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching property by ID");
  }
};

export default getPropertyById;
