import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHostsById = async (id) => {
  try {
    const host = await prisma.host.findUnique({
      where: { id },
    });
    return host;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching host by ID");
  }
};

export default getHostsById;
