const express = require('express')
const bodyParser = require('body-parser')
const { success, fail } = require('./handlers/api-utils')
const {

    login,
    listUsers, 
    createUser,
    retrieveUser,
    updateUser,
    deleteUser,
    listCoursesByLanguage,
    listCoursesByTeacher,
    createCourse,
    retrieveCourse,
    deleteCourse

    } = require('./handlers')

const router = express.Router()
const jsonBodyParser = bodyParser.json()

/*****************Adding LogIn with token************/

const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

function jwtValidate(req, res, next) {
    const auth = req.get('authorization')
    try {
        const token = auth.split(' ')[1]
        
        req.tokenDecrypt =  jwt.verify(token, secret)

        next()
    } catch(err) {
        res.json(fail('invalid token'))
    }
}

/*****************LogIn************/

router.post('/login', jsonBodyParser, login)

/*****************Users************/

router.get('/users', jwtValidate, listUsers)

router.post('/user', jsonBodyParser, createUser)

router.get('/user', jwtValidate, retrieveUser)

router.put('/user/:id', [jsonBodyParser, jwtValidate], updateUser)

router.delete('/user/:id', [jsonBodyParser, jwtValidate], deleteUser)

/*****************Courses************/

router.get('/courses/:language', listCoursesByLanguage)

router.get('/courses/teacher/:id', listCoursesByTeacher)

router.post('/course', [jsonBodyParser, jwtValidate], createCourse)

router.get('/course/:id', retrieveCourse)

router.delete('/course/:id', [jsonBodyParser, jwtValidate], deleteCourse)

module.exports = router