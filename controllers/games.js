const sendAllGames = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.gamesArray));
};
const sendGameCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};
const sendUpdatedGames = (req, res) => {
  res.send({
    games: req.games,
    updated: req.updatedObject,
  });
};
const sendGameById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};
const sendGameUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ message: "Игры обновлена" }));
};

const sendGameDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

module.exports = {
  sendGameDeleted,
  sendAllGames,
  sendGameUpdated,
  sendUpdatedGames,
  sendGameCreated,
  sendGameById,
};
