import { PrismaClient } from "@prisma/client";

const getProperties = async (location, pricePerNight) => {
  const prisma = new PrismaClient();
  const filters = {};
  if (pricePerNight) {
    filters.pricePerNight = {
      equals: parseFloat(pricePerNight),
    };
  }
  const properties = await prisma.property.findMany({
    where: filters,
    where: {
      location: {
        contains: location,
      },
    },
  });

  return properties;
};

export default getProperties;
