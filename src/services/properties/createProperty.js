import propertyData from "../../data/properties.json";
import { v4 as uuid } from "uuid";

export const createProperty = (
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
  const newProperty = {
    id: uuid(),
    title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestCount,
    hostId,
    rating,
  };
  return newProperty;
};
