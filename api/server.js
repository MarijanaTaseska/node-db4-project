const express = require('express')
const recepiesRouter = require('./recipes/recipes-router')

const server = express()
server.use(express.json())

server.use('/api/recipe', recepiesRouter)

server.use('*', (req, res, next) => {
    res.json({ api: 'up' })
})

module.exports = server