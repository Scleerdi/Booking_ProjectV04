import { Router } from "express";
import getHosts from "../services/hosts/getHosts.js";
import getHostById from "../services/hosts/getHostById.js";
import updateHostById from "../services/hosts/updateHostById.js";
// import createHost from "../services/hosts/createHost.js";
// import deleteHost from "../services/hosts/deleteHost.js";
import authMiddleware from "../middleware/advancedAuth.js";

const hostsRouter = Router();
console.log("getHosts");

hostsRouter.get("/", async (req, res) => {
  try {
    const { aboutMe } = req.query;
    const hosts = await getHosts();
    res.status(200).json(hosts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting hosts");
  }
});

hostsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const host = await getHostById(id);

    if (!host) {
      res.status(404).send(`Host ${id} not found`);
    } else {
      res.status(200).json(host);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Host not found by Id");
  }
});

hostsRouter.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe,
    } = req.body;
    const updatedHost = await updateHostById(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    );
    res.status(200).json(updatedHost);
  } catch (error) {
    console.error(error);
    res.status(500).send("Host failed to update by Id");
  }
});

// hostsRouter.post("/", authMiddleware, (req, res) => {
//   const {
//     username,
//     password,
//     name,
//     email,
//     phoneNumber,
//     profilePicture,
//     aboutMe,
//   } = req.body;
//   const newHost = createHost(
//     username,
//     password,
//     name,
//     email,
//     phoneNumber,
//     profilePicture,
//     aboutMe
//   );
//   res.status(201).json(newHost);
// });

// hostsRouter.delete("/:id", authMiddleware, (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedHost = deleteHost(id);

//     if (!deletedHost) {
//       res.status(404).send(`Host ${id} not found`);
//     } else {
//       res.status(200).json({
//         message: `Host with id ${deletedHost} was deleted!`,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(`Deleting Host ${id} failed`);
//   }
// });

export default hostsRouter;
