import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteProperty = async (id) => {
  try {
    // Check if property exists
    const existingProperty = await prisma.property.findUnique({
      where: {
        id,
      },
    });

    if (!existingProperty) {
      return null;
    }

    // Delete property using Prisma
    await prisma.property.delete({
      where: {
        id,
      },
    });

    return id;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw new Error("Error deleting property");
  }
};

export default deleteProperty;
