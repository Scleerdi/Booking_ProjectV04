import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateHostById = async (
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
    ////console.log("ID:", id);
    const existingHost = await prisma.host.findUnique({
      where: {
        id,
      },
    });
    ////console.log("existingHost:", existingHost);
    if (!existingHost) {
      throw new Error(`Host ${id} not found`);
    }
    const updatedHost = await prisma.host.update({
      where: {
        id,
      },
      data: {
        username: username ?? existingHost.username,
        password: password ?? existingHost.password,
        name: name ?? existingHost.name,
        email: email ?? existingHost.email,
        phoneNumber: phoneNumber ?? existingHost.phoneNumber,
        profilePicture: profilePicture ?? existingHost.profilePicture,
        aboutMe: aboutMe ?? existingHost.aboutMe,
      },
    });
    ////console.log("updatedhost:", updatedHost);
    return updatedHost;
  } catch (error) {
    console.error("Error updating host:", error);
    throw new Error("Error updating host");
  }
};

export default updateHostById;
