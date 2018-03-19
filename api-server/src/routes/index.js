// TODO create router with routes (routes should call logic, each one)
const express = require('express')
const bodyParser = require('body-parser')
const { list, create } = require('./handlers')

const router = express.Router()

router.get('/courses/:id', list)

// router.post('/login', login)

// router.post('users/create', create)

module.exports = router