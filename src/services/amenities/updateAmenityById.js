//import amenityData from "../../data/amenities.json";

export const updateAmenityById = (id, name) => {
  const amenity = amenityData.amenities.find((amenity) => amenity.id === id);
  if (!amenity) throw new Error(`Amenity ${id} not found`);
  amenity.name == name ?? amenity.name;
  return amenity;
};
