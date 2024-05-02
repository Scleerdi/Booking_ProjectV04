import { auth } from "express-openid-connect";
import express from "express";

// Initialize Express.js application
const app = express();

// Define authentication middleware
const authMiddleware = auth({
  issuerBaseURL: "https://dev-ve8rhfzib1f1o1gu.eu.auth0.com/",
  baseURL: "http://localhost:3000",
  clientID: "zeL5mutwEMNM1Mndjsmsbrhkx4WgeKv6",
  secret: "GPLryxC0rjnY20obTD9PpstEyGnH8Xlpm99GX4c_YlBUa5InX-_V9j8mQAFkdcTg",
});

export default authMiddleware;
