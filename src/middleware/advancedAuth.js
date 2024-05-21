import { auth } from "express-openid-connect";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define authentication middleware
const authMiddleware = (req, res, next) => {
  const authGegevens = auth({
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.AUTH0_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    secret: process.env.AUTH0_SECRET,
  });
  next();
};

export default authMiddleware;
