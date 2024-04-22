import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAmenityById = async (id) => {
  try {
    const amenity = await prisma.amenity.findUnique({
      where: { id },
    });
    return amenity;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching amenity by ID");
  }
};
