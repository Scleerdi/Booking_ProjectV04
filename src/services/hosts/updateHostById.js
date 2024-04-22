import hostData from "../../data/hosts.json";

export const updateHostById = (
  id,
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  const host = hostData.hosts.find((host) => host.id === id);

  if (!host) throw new Error(`host ${id} not found`);

  host.username = username ?? host.username;
  host.password = password ?? host.password;
  host.name = name ?? host.name;
  host.email = email ?? host.email;
  host.phoneNumber = phoneNumber ?? host.phoneNumber;
  host.profilePicture = profilePicture ?? host.profilePicture;
  host.aboutMe = aboutMe ?? host.aboutMe;

  return host;
};
