import reviewData from "../../data/reviews.json";
import { v4 as uuid } from "uuid";

export const createReview = (userId, propertyId, rating, comment) => {
  const newReview = { id: uuid(), userId, propertyId, rating, comment };
  reviewData.reviews.push(newReview);
  return newReview;
};
