import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginRouter = Router();
const prisma = new PrismaClient();

loginRouter.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user || (await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const secretKey = process.env.AUTH_SECRET_KEY || "my-secret-key";
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

    res.status(200).json({ message: "Successfully logged in!", token });
  } catch (error) {
    console.error(error);
    res.status(401).send("Error logging in");
  }
});

export default loginRouter;
