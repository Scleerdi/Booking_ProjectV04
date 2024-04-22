import userData from "../../data/users.json";

export const getUserById = (id) => {
  return userData.users.find((users) => users.id === id);
};
