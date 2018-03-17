// TODO create router with routes (routes should call logic, each one)
const express = require('express')
const { list } = require('./handlers')

const router = express.Router()

router.get('/courses/:id', list)

module.exports = router