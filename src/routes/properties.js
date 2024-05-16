import express from "express";
import createProperty from "../services/properties/createProperty.js";
import deleteProperty from "../services/properties/deleteProperty.js";
import getProperties from "../services/properties/getProperties.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import updatePropertyById from "../services/properties/updatePropertyById.js";
//import /*authMiddleware*/from "../middleware/advancedAuth.js";

const propertiesRouter = express.Router();

propertiesRouter.post(
  "/",
  /*authMiddleware*/ async (req, res) => {
    try {
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
      const newProperty = await createProperty(
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
    } catch (error) {
      console.error("Error creating property:", error);
      res.status(400).json({ message: "Error creating property" });
    }
  }
);

propertiesRouter.delete(
  "/:id",
  /*authMiddleware*/ async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPropertyId = await deleteProperty(id);

      if (!deletedPropertyId) {
        res.status(404).send(`Property ${id} not found`);
      } else {
        res.status(200).json({
          message: `Property with id ${deletedPropertyId} was deleted!`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Deleting property ${id} failed`);
    }
  }
);

propertiesRouter.get("/", async (req, res) => {
  try {
    const { aboutMe } = req.query;
    const properties = await getProperties(aboutMe);
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting properties");
  }
});

propertiesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const property = await getPropertyById(id);

    if (!property) {
      res.status(404).send(`Property ${id} not found`);
    } else {
      res.status(200).json(property);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error finding property by Id");
  }
});

propertiesRouter.put(
  "/:id",
  /*authMiddleware*/ async (req, res) => {
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
      const updatedProperty = await updatePropertyById(
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
      res.status(404).send("Property failed to update by Id");
    }
  }
);

export default propertiesRouter;
