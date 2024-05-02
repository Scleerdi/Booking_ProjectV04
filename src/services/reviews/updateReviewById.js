import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateReviewById = async (id, userId, propertyId, rating, comment) => {
  try {
    const existingReview = await prisma.review.findUnique({
      where: {
        id,
      },
    });
    if (!existingReview) {
      throw new Error(`Review ${id} not found`);
    }
    const updatedReview = await prisma.review.update({
      where: {
        id,
      },
      data: {
        userId: userId ?? existingReview.userId,
        propertyId: propertyId ?? existingReview.propertyId,
        rating: rating ?? existingReview.rating,
        comment: comment ?? existingReview.comment,
      },
    });

    return updatedReview;
  } catch (error) {
    console.error("Error updating review:", error);
    throw new Error("Error updating review");
  }
};

export default updateReviewById;
