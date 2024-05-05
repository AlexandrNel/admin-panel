const gamesRouter = require("express").Router();
const { sendGameCreated } = require("../controllers/games");
const {
  checkIsTitleInArray,
  updateGamesArray,
  // updateGamesFile,
  findGameById,
  deleteGame,
  findAllGames,
  createGame,
} = require("../middlewares");
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.delete(
  "/games/:id",
  findGameById,
  deleteGame,
  // updateGamesFile,
  sendUpdatedGames
);

module.exports = gamesRouter;
