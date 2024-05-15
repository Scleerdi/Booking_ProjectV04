import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteHost = async (id) => {
  try {
    // const existingHost = await prisma.host.findUnique({
    //   where: {
    //     id,
    //   },
    // });

    // if (!existingHost) {
    //   return null;
    // }
    console.log("delete id:", id);
    const ans = await prisma.host.delete({
      where: {
        id,
      },
    });
    //console.log("ans:", ans);
    return id;
  } catch (error) {
    console.error("Error deleting host:", error);
    throw new Error("Error deleting host");
  }
};

export default deleteHost;
