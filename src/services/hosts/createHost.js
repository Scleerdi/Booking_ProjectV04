import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createHost = async (
  id,
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  try {
    const newHost = await prisma.host.create({
      data: {
        id,
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
        aboutMe,
      },
    });
    return newHost;
  } catch (error) {
    console.error("Error creating host:", error);
    throw new Error("Error creating host");
  }
};

export default createHost;
