//import amenityData from "../../data/amenities.json";

export const deleteAmenity = (id) => {
  const index = amenityData.amenities.findIndex((amenity) => amenity.id === id);

  if (index == -1) return null;

  amenityData.amenities.splice(index, 1);
  return id;
};
