import reviewData from "../../data/reviews.json";

export const getReviewById = (id) => {
  return reviewData.reviews.find((review) => review.id === id);
};
