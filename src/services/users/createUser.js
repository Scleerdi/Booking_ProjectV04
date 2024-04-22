import userData from "../../data/users.json";
import { v4 as uuid } from "uuid";

export const creatUser = (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  const newUser = {
    id: uuid(),
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
  };
  userData.users.push(newUser);
  return newUser;
};
