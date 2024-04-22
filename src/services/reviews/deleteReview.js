import reviewData from "../../data/reviews.json";

export const deleteReview = (id) => {
  const index = reviewData.reviews.findIndex((reviews) => reviews.id === id);
  if (index == -1) return null;

  reviewData.reviews.slice(index, 1);
  return id;
};
