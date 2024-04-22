import propertyData from "../../data/properties.json";

export const getPropertyById = (id) => {
  return propertyData.properties.find((property) => property.id === id);
};
