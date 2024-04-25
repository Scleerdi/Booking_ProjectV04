import express from "express";
import amenitiesRouter from "./routes/amenities.js";
import bookingsRouter from "./routes/bookings.js";
import hostsRouter from "./routes/hosts.js";
import propertiesRouter from "./routes/properties.js";
import reviewsRouter from "./routes/reviews.js";
import usersRouter from "./routes/users.js";
import loginRouter from "./routes/login.js";
// import "dotenv/config.js";

//import { nodeProfilingIntegration } from "@sentry/profiling-node";

const app = express();

// Mount routers
app.use("/amenities", amenitiesRouter);
app.use("/bookings", bookingsRouter);
app.use("/hosts", hostsRouter);
app.use("/properties", propertiesRouter);
app.use("/reviews", reviewsRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
