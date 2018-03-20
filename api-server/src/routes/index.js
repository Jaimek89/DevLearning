const express = require('express')
const bodyParser = require('body-parser')
const {

    listUsers, 
    createUser,
    retrieveUser,
    updateUser,
    deleteUser,
    listCoursesByLanguage,
    createCourse,
    retrieveCourse,
    deleteCourse

    } = require('./handlers')

const router = express.Router()

const jsonBodyParser = bodyParser.json()

/*****************Users************/

router.get('/users', listUsers)

router.post('/user', jsonBodyParser, createUser)

router.get('/user/:id', retrieveUser)

router.put('/user/:id', jsonBodyParser, updateUser)

router.delete('/user/:id', jsonBodyParser, deleteUser)

/*****************Courses************/

router.get('/courses/:language', listCoursesByLanguage)

router.post('/course', jsonBodyParser, createCourse)

router.get('/course/:id', retrieveCourse)

router.delete('/course/:id', deleteCourse)

module.exports = router