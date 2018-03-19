// TODO all logic here
const Course = require('../models/Course')
const User = require('../models/User')

module.exports = {
    //It will list all courses from the selected language
    listCourses(id) {
        return Course.find({'languageId':id})
    },
    //It will create a user
    createUsers(name, surname, email, username, password) {
        return Promise.resolve()
            .then(()=> {
                return User.findOne({ username })
            })
            .then(user => {
                if (user) throw Error('username already exists')

                return User.create({ name, surname, email, surname, password })
                    .then(()=> username)
            })
    }
}