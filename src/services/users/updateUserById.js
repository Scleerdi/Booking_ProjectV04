import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateUserById = async (
  id,
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!existingUser) {
      throw new Error(`User ${id} not found`);
    }
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        username: username ?? existingUser.username,
        password: password ?? existingUser.password,
        name: name ?? existingUser.name,
        email: email ?? existingUser.email,
        phoneNumber: phoneNumber ?? existingUser.phoneNumber,
        profilePicture: profilePicture ?? existingUser.profilePicture,
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Error updating user");
  }
};

export default updateUserById;
