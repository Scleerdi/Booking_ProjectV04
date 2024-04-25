import { Router } from "express";
import getReviews from "../services/reviews/getReviews.js";
// import getReviewById from "../services/reviews/getReviewById.js";
// import createReview from "../services/reviews/createReview.js";
// import deleteReview from "../services/reviews/deleteReview.js";
// import updateReviewById from "../services/reviews/updateReviewById.js";
// import authMiddleware from "../middleware/advancedAuth.js";

const reviewsRouter = Router();
console.log("getReviews");

reviewsRouter.get("/", async (req, res) => {
  try {
    const { comment } = req.query;
    const reviews = await getReviews(comment);
    console.log("reviews:", reviews);
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting list of reviews!");
  }
});

// reviewsRouter.get("/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     const review = getReviewById(id);

//     if (!review) {
//       res.status(404).send(`Review with id ${id} was not found!`);
//     } else {
//       res.status(200).json(review);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Something went wrong while getting review by id!");
//   }
// });

// reviewsRouter.put("/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId, propertyId, rating, comment } = req.body;
//     const updatedReview = updateReviewById(
//       id,
//       userId,
//       propertyId,
//       rating,
//       comment
//     );
//     res.status(200).json(updatedReview);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Something went wrong while updating property by id!");
//   }
// });

// reviewsRouter.post("/", (req, res) => {
//   const { userId, propertyId, rating, comment } = req.body;
//   const newReview = createReview(userId, propertyId, rating, comment);
//   res.status(201).json(newReview);
// });

// reviewsRouter.delete("/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedReviewId = deleteReview(id);

//     if (!deletedReviewId) {
//       res.status(404).send(`Booking with id ${id} was not found!`);
//     } else {
//       res.status(200).json({
//         message: `Booking with id ${deletedReviewId} was deleted!`,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Something went wrong while deleting review by id!");
//   }
// });

export default reviewsRouter;
