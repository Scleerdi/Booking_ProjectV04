import hostData from "../../data/hosts.json";
import { v4 as uuid } from "uuid";

export const createHost = (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  const newHost = {
    id: uuid(),
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
    aboutMe,
  };
  hostData.hosts.push(newHost);
  return newHost;
};
