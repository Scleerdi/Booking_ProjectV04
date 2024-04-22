const { auth, requiresAuth } = require("express-openid-connect");

export const authMiddleware = auth({
  audience: "https://express-bookings-api",
  issuerBaseURL: "https://dev-ve8rhfzib1f1o1gu.eu.auth0.com/",
});
