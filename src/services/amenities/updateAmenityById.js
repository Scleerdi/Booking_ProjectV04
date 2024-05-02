import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateAmenityById = async (id, name) => {
  try {
    const existingAmenity = await prisma.amenity.findUnique({
      where: {
        id,
      },
    });
    if (!existingAmenity) {
      throw new Error(`Amenity ${id} not found`);
    }
    const updatedAmenity = await prisma.amenity.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return updatedAmenity;
  } catch (error) {
    console.error("Error updating amenity:", error);
    throw new Error("Error updating amenity");
  }
};

export default updateAmenityById;
