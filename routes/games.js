const gamesRouter = require("express").Router();
const {
  checkIsTitleInArray,
  updateGamesArray,
  updateGame,
  findGameById,
  deleteGame,
  findAllGames,
  createGame,
} = require("../middlewares");

const {
  sendAllGames,
  sendUpdatedGames,
  sendGameById,
  sendGameCreated,
  sendGameUpdated,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.put("/games/:id", updateGame, sendGameUpdated);

gamesRouter.delete(
  "/games/:id",
  findGameById,
  deleteGame,
  // updateGamesFile,
  sendUpdatedGames
);

module.exports = gamesRouter;
