import express from "express";
import getProperties from "../services/properties/getProperties.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import createProperty from "../services/properties/createProperty.js";
import updatePropertyById from "../services/properties/updatePropertyById.js";
import deleteProperty from "../services/properties/deleteProperty.js";

export const propertiesRouter = express.Router();

propertiesRouter.get("/", (req, res) => {
  try {
    const { aboutMe } = req.query;
    const properties = getProperties(aboutMe);
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting properties");
  }
});

propertiesRouter.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const property = getPropertyById(id);

    if (!property) {
      res.status(404).send(`Property ${id} not found`);
    } else {
      res.status(200).json(property);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Host not found by Id");
  }
});

propertiesRouter.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    } = req.body;
    const updatedProperty = updatePropertyById(
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
    );
    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).send("Property failed to update by Id");
  }
});

propertiesRouter.post("/", (req, res) => {
  const {
    title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestCount,
    hostId,
    rating,
  } = req.body;
  const newProperty = createProperty(
    title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestCount,
    hostId,
    rating
  );
  res.status(201).json(newProperty);
});

propertiesRouter.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const deletedPropertyId = deleteProperty(id);

    if (!deletedPropertyId) {
      res.status(404).send(`Property ${id} not found`);
    } else {
      res.status(200).json({
        message: `Property with id ${deletedHost} was deleted!`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(`Deleting property ${id} failed`);
  }
});
