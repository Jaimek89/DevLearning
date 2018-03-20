const listUsers = require('./listUsers')
const createUser = require('./createUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const listCoursesByLanguage = require('./listCoursesByLanguage')
const createCourse = require('./createCourse')
const retrieveCourse = require('./retrieveCourse')
const deleteCourse = require('./deleteCourse')

module.exports = {
    listUsers,
    createUser,
    retrieveUser,
    updateUser,
    deleteUser,
    listCoursesByLanguage,
    createCourse,
    retrieveCourse,
    deleteCourse
}