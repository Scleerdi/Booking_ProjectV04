import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteBooking = async (id) => {
  try {
    const existingBooking = await prisma.booking.findUnique({
      where: {
        id,
      },
    });

    if (!existingBooking) {
      return null;
    }
    await prisma.booking.delete({
      where: {
        id,
      },
    });

    return id;
  } catch (error) {
    console.error("Error deleting booking:", error);
    throw new Error("Error deleting booking");
  }
};

export default deleteBooking;
