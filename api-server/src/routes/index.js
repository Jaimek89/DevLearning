const express = require('express')
const bodyParser = require('body-parser')
const { createUser, listCoursesByLanguage } = require('./handlers')

const router = express.Router()

const jsonBodyParser = bodyParser.json()

router.post('/users', jsonBodyParser, createUser)

router.get('/courses', listCoursesByLanguage)

module.exports = router