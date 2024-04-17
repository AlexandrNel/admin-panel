const gamesRouter = require("express").Router();
const {getAllGames, deleteGame, addGameController} = require('../controllers/games')

gamesRouter.get("/games", getAllGames);
gamesRouter.delete("/games/:id", deleteGame);
gamesRouter.post('/games', addGameController)

module.exports = gamesRouter;
