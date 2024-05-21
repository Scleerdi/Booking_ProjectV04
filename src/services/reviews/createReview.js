import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReview = async (userId, propertyId, rating, comment) => {
  try {
    const newReview = await prisma.review.create({
      data: {
        userId,
        propertyId,
        rating,
        comment,
      },
    });
    if (!newReview.propertyId) return null;
    return newReview;
  } catch (error) {
    console.error("Error creating review:", error);
    throw new Error("Error creating review");
  }
};

export default createReview;
