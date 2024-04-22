import bookingData from "../../data/bookings.json";

export const updateBookingById = (
  id,
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const booking = bookingData.bookings.find((booking) => booking.id === id);

  if (!booking) throw new Error(`Booking ${id} not found`);

  booking.userId = userId ?? booking.userId;
  booking.propertyId = propertyId ?? booking.propertyId;
  booking.checkinDate = checkinDate ?? booking.checkinDate;
  booking.checkoutDate = checkoutDate ?? booking.checkoutDate;
  booking.numberOfGuests = numberOfGuests ?? booking.numberOfGuests;
  booking.totalPrice = totalPrice ?? booking.totalPrice;
  booking.bookingStatus = bookingStatus ?? booking.bookingStatus;

  return booking;
};
