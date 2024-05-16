import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteReview = async (id) => {
  try {
    const existingReview = await prisma.review.findUnique({
      where: {
        id,
      },
    });

    if (!existingReview) {
      return null;
    }
    await prisma.review.delete({
      where: {
        id,
      },
    });
    return id;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw new Error("Error deleting review");
  }
};

export default deleteReview;
