import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBookingById = async (id) => {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
    });
    return booking;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching booking by ID");
  }
};

export default getBookingById;
