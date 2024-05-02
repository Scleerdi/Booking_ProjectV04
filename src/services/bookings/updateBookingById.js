import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateBookingById = async (
  id,
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  try {
    const existingBooking = await prisma.booking.findUnique({
      where: {
        id,
      },
    });
    if (!existingBooking) {
      throw new Error(`Booking ${id} not found`);
    }
    const updatedBooking = await prisma.booking.update({
      where: {
        id,
      },
      data: {
        userId: userId ?? existingBooking.userId,
        propertyId: propertyId ?? existingBooking.propertyId,
        checkinDate: checkinDate ?? existingBooking.checkinDate,
        checkoutDate: checkoutDate ?? existingBooking.checkoutDate,
        numberOfGuests: numberOfGuests ?? existingBooking.numberOfGuests,
        totalPrice: totalPrice ?? existingBooking.totalPrice,
        bookingStatus: bookingStatus ?? existingBooking.bookingStatus,
      },
    });

    return updatedBooking;
  } catch (error) {
    console.error("Error updating booking:", error);
    throw new Error("Error updating booking");
  }
};

export default updateBookingById;
