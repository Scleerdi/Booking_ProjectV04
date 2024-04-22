import bookingData from "../../data/bookings.json";
import { v4 as uuid } from "uuid";

export const createBooking = (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const newBooking = {
    id: uuid(),
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus,
  };
  bookingData.bookings.push(newBooking);
  return newBooking;
};
