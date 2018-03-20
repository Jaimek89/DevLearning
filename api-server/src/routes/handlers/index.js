const listUsers = require('./listUsers')
const createUser = require('./createUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')
const listCoursesByLanguage = require('./listCoursesByLanguage')

module.exports = {
    listUsers,
    createUser,
    retrieveUser,
    updateUser,
    deleteUser,
    listCoursesByLanguage
}