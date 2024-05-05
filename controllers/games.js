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

module.exports = { sendAllGames, sendUpdatedGames, sendGameCreated };
