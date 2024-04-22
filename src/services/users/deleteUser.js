import userData from "../../data/users.json";

export const deleteUser = (id) => {
  const index = userData.users.findIndex((users) => users.id === id);
  if (index == -1) return null;

  userData.users.slice(index, 1);
  return id;
};
