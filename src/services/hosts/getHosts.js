import hostData from "../../data/hosts.json" assert { type: "json" };

export const getHosts = () => {
  return hostData;
};
