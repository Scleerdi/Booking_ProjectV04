import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProperty = async (
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestCount,
  hostId,
  rating
) => {
  try {
    const newProperty = await prisma.property.create({
      data: {
        title,
        description,
        location,
        pricePerNight,
        bedroomCount,
        bathRoomCount,
        maxGuestCount,
        hostId,
        rating,
      },
    });
    return newProperty;
  } catch (error) {
    console.error("Error creating property:", error);
    throw new Error("Error creating property");
  }
};

export default createProperty;
