const login = require('./login')
const listUsers = require('./listUsers')
const createUser = require('./createUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const listCoursesByLanguage = require('./listCoursesByLanguage')
const listCoursesByTeacher = require('./listCoursesByTeacher')
const createCourse = require('./createCourse')
const retrieveCourse = require('./retrieveCourse')
const deleteCourse = require('./deleteCourse')

module.exports = {
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
}