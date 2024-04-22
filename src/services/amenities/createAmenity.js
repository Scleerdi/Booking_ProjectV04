//import amenityData from "../../data/amenities.json";
import { v4 as uuid } from "uuid";

export const createAmenity = (name) => {
  const newAmenity = {
    id: uuid(),
    name,
  };
  amenityData.amenities.push(newAmenity);
  return newAmenity;
};
