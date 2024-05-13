const express = require("express");
const path = require("path");
const {
  mainRouter,
  gamesRouter,
  categoriesRouter,
  usersRouter,
} = require("./routes");
const apiRouter = require("./routes/apiRouter");
const cors = require("./middlewares/cors");
const bodyParser = require("body-parser");
const connectToDatabase = require("./database/connect");

const app = express();
const PORT = 3000;
connectToDatabase();
app.use(
  cors,
  bodyParser.json(),
  apiRouter,
  express.static(path.join(__dirname, "public")),
  mainRouter,
  gamesRouter,
  categoriesRouter,
  usersRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
