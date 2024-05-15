import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  let newUser;
  try {
    newUser = await prisma.user.create({
      data: {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  } finally {
    await prisma.$disconnect(); // Close the Prisma client connection
  }

  return newUser;
};

export default createUser;
