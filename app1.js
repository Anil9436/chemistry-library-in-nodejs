const express = require('express')
const pt = require('periodic-table')
const app = express()
app.use(express.json())

const apiRouter = require('./routes/apifetch')
app.use('/periodic_table', apiRouter)

app.listen(9000,()=>{
    console.log("Server Started")
})