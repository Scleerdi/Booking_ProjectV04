import bookingData from "../../data/bookings.json";

export const deleteBooking = (id) => {
  const index = bookingData.bookings.findIndex((booking) => booking.id === id);

  if (index == -1) return null;

  bookingData.bookings.splice(index, 1);
  return id;
};
