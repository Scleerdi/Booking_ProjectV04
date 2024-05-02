import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUser = async (id) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!existingUser) {
      return null;
    }
    await prisma.user.delete({
      where: {
        id,
      },
    });

    return id;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Error deleting user");
  }
};

export default deleteUser;
