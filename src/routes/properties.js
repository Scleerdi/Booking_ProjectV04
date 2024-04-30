import express from "express";
import getProperties from "../services/properties/getProperties.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import updatePropertyById from "../services/properties/updatePropertyById.js";
// import createProperty from "../services/properties/createProperty.js";
// import deleteProperty from "../services/properties/deleteProperty.js";

const propertiesRouter = express.Router();
console.log("getProperties");

propertiesRouter.get("/", async (req, res) => {
  try {
    const { aboutMe } = req.query;
    const properties = await getProperties(aboutMe);
    console.log("properties:", properties);
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
    res.status(500).send("Host not found by Id");
  }
});

propertiesRouter.put("/:id", async (req, res) => {
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
    res.status(500).send("Property failed to update by Id");
  }
});

// propertiesRouter.post("/", (req, res) => {
//   const {
//     title,
//     description,
//     location,
//     pricePerNight,
//     bedroomCount,
//     bathRoomCount,
//     maxGuestCount,
//     hostId,
//     rating,
//   } = req.body;
//   const newProperty = createProperty(
//     title,
//     description,
//     location,
//     pricePerNight,
//     bedroomCount,
//     bathRoomCount,
//     maxGuestCount,
//     hostId,
//     rating
//   );
//   res.status(201).json(newProperty);
// });

// propertiesRouter.delete("/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedPropertyId = deleteProperty(id);

//     if (!deletedPropertyId) {
//       res.status(404).send(`Property ${id} not found`);
//     } else {
//       res.status(200).json({
//         message: `Property with id ${deletedHost} was deleted!`,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(`Deleting property ${id} failed`);
//   }
// });

export default propertiesRouter;
