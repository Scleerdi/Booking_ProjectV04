import { PrismaClient } from "@prisma/client";

const getBookings = async () => {
  const prisma = new PrismaClient();
  const bookings = await prisma.booking.findMany();
  ////console.log("got bookings:", bookings);

  return bookings;
};

export default getBookings;
