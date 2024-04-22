import hostData from "../../data/hosts.json";

export const deleteHost = (id) => {
  const index = hostData.hosts.findIndex((host) => host.id === id);
  if (index == -1) return null;

  hostData.hosts.splice(index, 1);
  return id;
};
