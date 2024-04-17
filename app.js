const express = require('express')
const {mainRoute, gamesRouter} = require('./routes')

const app = express()
const PORT = 3000
app.use(mainRoute, gamesRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})