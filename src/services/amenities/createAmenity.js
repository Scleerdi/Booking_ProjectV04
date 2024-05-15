import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAmenity = async (id, name) => {
  try {
    const newAmenity = await prisma.amenity.create({
      data: {
        id,
        name,
      },
    });
    return newAmenity;
  } catch (error) {
    console.error("Error creating amenity:", error);
    throw new Error("Error creating amenity");
  }
};

export default createAmenity;
