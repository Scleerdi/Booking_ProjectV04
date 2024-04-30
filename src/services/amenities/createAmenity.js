import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAmenity = async (name) => {
  try {
    const newAmenity = await prisma.amenity.create({
      data: {
        name,
      },
    });
    return newAmenity;
  } catch (error) {
    console.error("Error creating amenity:", error);
    throw new Error("Error creating amenity");
  }
};

export default createAmenity;

/*
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer zeL5mutwEMNM1Mndjsmsbrhkx4WgeKv6" -d '{"id": "TempId-356", "name": "minibar"}' http://localhost:3000/amenities 
*/
