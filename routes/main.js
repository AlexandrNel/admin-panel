const mainRoute = require("express").Router();
const fs = require('fs').promises

mainRoute.get("/", async (req, res) =>{
    const data = await fs.readFile('./public/index.html', 'utf-8')
    res.header('Content-Type', 'text/html').send(data)
});

module.exports = mainRoute;
