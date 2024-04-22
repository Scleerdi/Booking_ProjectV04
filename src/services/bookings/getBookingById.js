import bookingData from "../../data/bookings.json";

export const getBookingById = (id) => {
  return bookingData.bookings.find((booking) => booking.id === id);
};
