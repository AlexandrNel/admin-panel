const express = require('express')
const path = require('path')
const {mainRoute, gamesRouter} = require('./routes')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000
app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute, 
    gamesRouter
)

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})