import { Router } from "express";
import createUser from "../services/users/createUser.js";
import deleteUser from "../services/users/deleteUser.js";
import getUsers from "../services/users/getUsers.js";
import getUserById from "../services/users/getUsersById.js";
import updateUserById from "../services/users/updateUserById.js";
import authMiddleware from "../middleware/advancedAuth.js";

const usersRouter = Router();
console.log("getUsers");

usersRouter.post("/", authMiddleware, async (req, res) => {
  const { username, password, name, email, phoneNumber, profilePicture } =
    req.body;
  const newUser = await createUser(
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture
  );
  res.status(201).json(newUser);
});

usersRouter.delete("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const deletedUserId = deleteUser(id);

    if (!deletedUserId) {
      res.status(404).send(`User with id ${id} was not found!`);
    } else {
      res.status(200).json({
        message: `User with id ${deletedUserId} was deleted!`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while deleting review by id!");
  }
});

usersRouter.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting list of users!");
  }
});

usersRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) {
      res.status(404).send(`User with id ${id} was not found!`);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting user by id!");
  }
});

usersRouter.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;
    const updatedUser = await updateUserById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while updating user by id!");
  }
});

export default usersRouter;
