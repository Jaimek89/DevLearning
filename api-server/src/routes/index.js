// TODO create router with routes (routes should call logic, each one)
const express = require('express')
const bodyParser = require('body-parser')
const { listCourses, createUsers } = require('./handlers')

const router = express.Router()

router.get('/courses/:id', listCourses)

// router.post('/login', login)

const jsonBodyParser = bodyParser.json()

router.post('users/create', jsonBodyParser, createUsers)

module.exports = router