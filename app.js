const express = require('express')
const path = require('path')
const {mainRoute, gamesRouter} = require('./routes')

const app = express()
const PORT = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(mainRoute, gamesRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})