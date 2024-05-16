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
  try {
    console.log(
      "createUser:",
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
      },
    });
    console.log("NEWUSER:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

export default createUser;
