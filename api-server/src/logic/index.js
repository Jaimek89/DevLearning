// TODO all logic here
const { User, Course } = require('../models')

const logic = {

    //It will create a user
    createUser(name, surname, email, username, password) {
        return Promise.resolve()
        .then(()=> {
            return User.findOne({ username })
        })
        .then(user => {
            if (user) throw Error('username already exists')
            
            return User.create({ name, surname, email, username, password })
        })
        .then(({ _id }) => _id)
    },

    //It will list all courses from the selected language
    listCoursesByLanguage(language) {
        return Course.find({ language })
    }
}

module.exports = logic