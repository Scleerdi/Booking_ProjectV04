import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updatePropertyById = async (
  id,
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
    const existingProperty = await prisma.property.findUnique({
      where: {
        id,
      },
    });
    if (!existingProperty) {
      throw new Error(`Property ${id} not found`);
    }
    const updatedProperty = await prisma.property.update({
      where: {
        id,
      },
      data: {
        title: title ?? existingProperty.title,
        description: description ?? existingProperty.description,
        location: location ?? existingProperty.location,
        pricePerNight: pricePerNight ?? existingProperty.pricePerNight,
        bedroomCount: bedroomCount ?? existingProperty.bedroomCount,
        bathRoomCount: bathRoomCount ?? existingProperty.bathRoomCount,
        maxGuestCount: maxGuestCount ?? existingProperty.maxGuestCount,
        hostId: hostId ?? existingProperty.hostId,
        rating: rating ?? existingProperty.rating,
      },
    });

    return updatedProperty;
  } catch (error) {
    console.error("Error updating property:", error);
    throw new Error("Error updating property");
  }
};

export default updatePropertyById;
