const apiRouter = require("express").Router;
const gamesRouter = require("./games");

apiRouter.use("/api", gamesRouter);
