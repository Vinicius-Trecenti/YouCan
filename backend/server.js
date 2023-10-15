require('dotenv').config() 

const express = require('express')
const router = require('./routes')
const cors = require('cors')

const server = express()


server.use(cors())
server.use(express.json())
server.use("/youcan", router)

server.listen(process.env.PORT, () => {
    console.log(`Conectado em localhost:${process.env.PORT}`)
})