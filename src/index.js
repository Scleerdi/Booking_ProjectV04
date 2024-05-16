import express from "express";
import bookingsRouter from "./routes/bookings.js";
import amenitiesRouter from "./routes/amenities.js";
import hostsRouter from "./routes/hosts.js";
import loginRouter from "./routes/login.js";
import propertiesRouter from "./routes/properties.js";
import reviewsRouter from "./routes/reviews.js";
import usersRouter from "./routes/users.js";
import * as Sentry from "@sentry/node";
import "dotenv/config.js";

import { nodeProfilingIntegration } from "@sentry/profiling-node";

const app = express();
app.use(express.json());

Sentry.init({
  dsn: "https://e49c9a0dc7d523f5bd24cd9f1472c483@o4506898858115072.ingest.us.sentry.io/4506898874630144",
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.get("/", function rootHandler(req, res) {
  res.send("Hello world!");
});
app.use(Sentry.Handlers.errorHandler());

app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.use("/bookings", bookingsRouter);
app.use("/amenities", amenitiesRouter);
app.use("/hosts", hostsRouter);
app.use("/properties", propertiesRouter);
app.use("/reviews", reviewsRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

// Start the server
app.listen(3000, () => {
  ////console.log("Server is listening on port 3000");
});
