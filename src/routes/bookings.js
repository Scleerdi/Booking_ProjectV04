import { Router } from "express";
import createBooking from "../services/bookings/createBooking.js";
import deleteBooking from "../services/bookings/deleteBooking.js";
import getBookings from "../services/bookings/getBookings.js";
import getBookingById from "../services/bookings/getBookingById.js";
import updateBookingById from "../services/bookings/updateBookingById.js";
//import /*authMiddleware*/from "../middleware/advancedAuth.js";

const bookingsRouter = Router();

bookingsRouter.post(
  "/",
  /*authMiddleware*/ async (req, res) => {
    try {
      const {
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus,
      } = req.body;
      const newBooking = await createBooking(
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus
      );
      res.status(201).json(newBooking);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(400).json({ message: "Error creating booking" });
    }
  }
);
bookingsRouter.delete(
  "/:id",
  /*authMiddleware*/ async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBookingId = await deleteBooking(id);

      if (!deletedBookingId) {
        res.status(404).send(`Booking ${id} not found`);
      } else {
        res.status(200).json({
          message: `Booking with id ${deleteBooking} was deleted!`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(404).send("Deleting booking ${id} failed");
    }
  }
);

bookingsRouter.get("/", async (req, res) => {
  try {
    const bookings = await getBookings();
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting bookings");
  }
});

bookingsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await getBookingById(id);

    if (!booking) {
      res.status(404).send(`Booking ${id} not found`);
    } else {
      res.status(200).json(booking);
    }
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
    res.status(500).send("Error fetching booking by ID");
  }
});

bookingsRouter.put(
  "/:id",
  /*authMiddleware*/ async (req, res) => {
    try {
      const { id } = req.params;
      const {
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus,
      } = req.body;
      const updatedBooking = await updateBookingById(
        id,

        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus
      );
      if (updatedBooking) {
        res.status(200).send({
          message: `Booking with id ${id} successfully updated`,
          updatedBooking,
        });
      } else {
        res.status(404).json({
          message: `Booking with id ${id} not found`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(404).send("Booking failed to update by Id");
    }
  }
);

export default bookingsRouter;
