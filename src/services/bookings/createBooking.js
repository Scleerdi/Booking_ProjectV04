import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBooking = async (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  try {
    const newBooking = await prisma.booking.create({
      data: {
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus,
      },
    });

    return newBooking;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw new Error("Error creating booking");
  }
};

export default createBooking;
