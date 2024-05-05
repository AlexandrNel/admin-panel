const { readData, writeData } = require("../utils/data");
const games = require("../models/game");

const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
  }
};

const findAllGames = async (req, res, next) => {
  const result = await games.find({}).populate("categories").populate({
    path: "users",
    select: "-password",
  });
  req.gamesArray = result;
  console.log(result);
  next();
};

const checkIsTitleInArray = (req, res, next) => {
  req.isNew = !Boolean(req.games.find((item) => item.title === req.body.title));
  next();
};

const updateGamesArray = (req, res, next) => {
  if (req.isNew) {
    const inArray = req.games.map((item) => Number(item.id));
    let maximalId;
    if (inArray.length > 0) {
      maximalId = Math.max(...inArray);
    } else {
      maximalId = 0;
    }

    req.updatedObject = {
      id: maximalId + 1,
      title: req.body.title,
      image: req.body.image,
      link: req.body.link,
      description: req.body.description,
    };
    req.games = [...req.games, req.updatedObject];
    next();
  } else {
    res.status(400);
    res.send({ status: "error", message: "Игра с таким именем уже есть." });
  }
};

// const updateGamesFile = async (req, res, next) => {
//   await writeData("./data/games.json", req.games);
//   next();
// };

const findGameById = (req, res, next) => {
  const id = Number(req.params.id);
  req.game = req.games.find((item) => item.id === id);
  next();
};

const deleteGame = (req, res, next) => {
  const id = req.game.id;
  const index = req.games.findIndex((item) => item.id === id);
  req.games.splice(index, 1);
  next();
};
module.exports = {
  checkIsTitleInArray,
  updateGamesArray,
  // updateGamesFile,
  findGameById,
  deleteGame,
  findAllGames,
  createGame,
};
