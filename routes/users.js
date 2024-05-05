const usersRouter = require("express").Router();
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/user/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUserUpdated);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
module.exports = usersRouter;
