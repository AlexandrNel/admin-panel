const usersRouter = require("express").Router();
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/user/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUserUpdated);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
