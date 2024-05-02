import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteAmenity = async (id) => {
  try {
    const existingAmenity = await prisma.amenity.findUnique({
      where: {
        id,
      },
    });

    if (!existingAmenity) {
      return null;
    }
    await prisma.amenity.delete({
      where: {
        id,
      },
    });

    return id;
  } catch (error) {
    console.error("Error deleting amenity:", error);
    throw new Error("Error deleting amenity");
  }
};

export default deleteAmenity;
