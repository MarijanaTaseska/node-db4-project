const express = require('express')
const recepiesRouter = require('./recepies/recepies-router')

const server = express()
server.use(express.json())

server.use('/api/recepies', recepiesRouter)

module.exports = server