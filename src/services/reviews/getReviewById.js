import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getReviewById = async (id) => {
  try {
    const review = await prisma.review.findUnique({
      where: { id },
    });
    return review;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching review by ID");
  }
};

export default getReviewById;
