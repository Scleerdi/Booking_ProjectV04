import express from "express";
import getBookings from "../services/bookings/getBookings.js";
import createBooking from "../services/bookings/createBooking.js";
import getBookingById from "../services/bookings/getBookingById.js";
import deleteBooking from "../services/bookings/deleteBooking.js";
import updateBookingById from "../services/bookings/updateBookingById.js";
import authMiddleware from "../middleware/advancedAuth.js";

export const bookingsRouter = express.Router();

bookingsRouter.get("/", (req, res) => {
  try {
    const { totalPrice, bookingStatus } = req.query;
    const bookings = getBookings(totalPrice, bookingStatus);
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting bookings");
  }
});

bookingsRouter.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const booking = getBookingById(id);

    if (!booking) {
      res.status(404).send(`Booking ${id} not found`);
    } else {
      res.status(200).json(booking);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking not found by Id");
  }
});

bookingsRouter.put("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    } = req.body;
    const updatedBooking = updateBookingById(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    );
    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking failed to update by Id");
  }
});

bookingsRouter.post("/", authMiddleware, (req, res) => {
  const {
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus,
  } = req.body;
  const newBooking = createBooking(
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus
  );
  res.status(201).json(newBooking);
});

bookingsRouter.delete("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const deletedBookingId = deleteBooking(id);

    if (!deletedBookingId) {
      res.status(404).send(`Booking ${id} not found`);
    } else {
      res.status(200).json({
        message: `Booking with id ${deleteBooking} was deleted!`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Deleting booking ${id} failed");
  }
});
