const fs = require("fs").promises;

const apiRouter = require("express").Router();
const authRouter = require("./auth");
const categoriesRouter = require("./categories");
const gamesRouter = require("./games");
const usersRouter = require("./users");

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);
apiRouter.get("/admin/dashboard", async (req, res) => {
  const data = await fs.readFile("./public/admin/dashboard.html", "utf-8");
  res.header("Content-Type", "text/html").send(data);
});

module.exports = apiRouter;
