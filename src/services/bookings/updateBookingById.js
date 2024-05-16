import { PrismaClient } from "@prisma/client";

//const prisma = new PrismaClient();

//export const updateBookingById = async (
//   id,

//   propertyId,
//   checkinDate,
//   checkoutDate,
//   numberOfGuests,
//   totalPrice,
//   bookingStatus
// ) => {
//   try {
//     console.log(
//       "BOOKING:",
//       id,

//       propertyId,
//       checkinDate,
//       checkoutDate,
//       numberOfGuests,
//       totalPrice,
//       bookingStatus
//     );
//     const existingBooking = await prisma.booking.findUnique({
//       where: {
//         id,
//       },
//     });
//     const updatedBooking = await prisma.booking.update({
//       where: {
//         id,
//       },
//       data: {
//         propertyId: propertyId ?? existingBooking.propertyId,
//         checkinDate: checkinDate ?? existingBooking.checkinDate,
//         checkoutDate: checkoutDate ?? existingBooking.checkoutDate,
//         numberOfGuests: numberOfGuests ?? existingBooking.numberOfGuests,
//         totalPrice: totalPrice ?? existingBooking.totalPrice,
//         bookingStatus: bookingStatus ?? existingBooking.bookingStatus,
//       },
//     });

//     return updatedBooking;
//   } catch (error) {
//     console.error("Error updating booking:", error);
//     throw new Error("Error updating booking");
//   }
//};

const updateBookingById = async (id, updatedBooking) => {
  const prisma = new PrismaClient();
  const { user, property, ...rest } = updatedBooking;
  const booking = await prisma.booking.update({
    where: { id },
    data: {
      ...rest,
      user: user
        ? {
            connect: { id: user },
          }
        : undefined,
      property: property
        ? {
            connect: { id: property },
          }
        : undefined,
    },
  });

  return booking;
};
export default updateBookingById;
