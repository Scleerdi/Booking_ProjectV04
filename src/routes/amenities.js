import { Router } from "express";
import createAmenity from "../services/amenities/createAmenity.js";
import deleteAmenity from "../services/amenities/deleteAmenity.js";
import getAmenities from "../services/amenities/getAmenities.js";
import getAmenityById from "../services/amenities/getAmenityById.js";
import updateAmenityById from "../services/amenities/updateAmenityById.js";
//import authMiddlewarefrom "../middleware/advancedAuth.js";

const amenitiesRouter = Router();
////console.log("getAmenities");

amenitiesRouter.post(
  "/",
  /*authMiddleware*/ async (req, res) => {
    try {
      const { id, name } = req.body;
      const newAmenity = await createAmenity(id, name);
      ////console.log("CREATE");
      ////console.log(newAmenity);
      res.status(201).json(newAmenity);
    } catch (error) {
      console.error("Error creating amenity:", error);
      res.status(400).json({ message: "Error creating amenity" });
    }
  }
);

amenitiesRouter.delete(
  "/:id",
  /*authMiddleware*/ async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAmenityId = await deleteAmenity(id);

      if (!deletedAmenityId) {
        res.status(404).send(`Amenity with id ${id} was not found!`);
      } else {
        res.status(200).json({
          message: `Amenity with id ${deletedAmenityId} was deleted!`,
        });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("Something went wrong while deleting booking by id!");
    }
  }
);

amenitiesRouter.get("/", async (req, res) => {
  try {
    const amenities = await getAmenities();
    ////console.log("amenities", amenities);
    res.status(200).json(amenities);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Something went wrong while getting list of amenities!");
  }
});

amenitiesRouter.get("/:id", async (req, res) => {
  ////console.log("getAmenityById");
  try {
    const id = req.params.id;
    ////console.log(id);
    const amenity = await getAmenityById(id);
    ////console.log("amenity:", amenity);
    if (!amenity) {
      return res.status(404).json({ error: "Amenity not found" });
    }
    res.status(200).json(amenity);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting the amenity");
  }
});

amenitiesRouter.put(
  "/:id",
  /*authMiddleware*/ async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const updatedAmenity = await updateAmenityById(id, name);
      ////console.log(updatedAmenity);
      res.status(200).json(updatedAmenity);
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .send("Something went wrong while updating amenity by id!");
    }
  }
);

export default amenitiesRouter;
