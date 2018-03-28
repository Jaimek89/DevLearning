const { User, Course } = require('../models')
const validate = require('./validate')

const logic = {

/***********************Log In*********************/

    login(username, password) {
        return Promise.resolve()
            .then(() => {
                validate({ username, password })

                return User.findOne({ username, password })
            })
            .then(user => {
                if (!user) throw Error('username and/or password wrong')

                return user
            })
    },

/***********************Users Logic*********************/

    //It will create a user
    createUser(name, surname, email, username, password) {
        return Promise.resolve()
        .then(()=> {
            validate({ name, surname, email, username, password })

            return User.findOne({ username })
        })
        .then(user => {
            if (user) throw Error('username already exists')
            
            return User.create({ name, surname, email, username, password })
        })
        .then(({ _id }) => _id)
    },

    //It will list all users
    listUsers() {
        return User.find({}, { _id: 1, name: 1, surname: 1, email: 1, username: 1 })
    },

    //It will list one user
    retrieveUser(_id) {
        
        return Promise.resolve()
            .then(() => {
                
                validate({ _id })

                return User.findOne({ _id }, { password: 0 })
            })
            .then(user => {
                if (!user) throw Error('user does not exist')

                return user
            })
    },

    //It will update a user, the user will can change the email introducing correctly the username and password
    updateUser(_id, email, newEmail, username, password) {

        return Promise.resolve()
            .then(() => {
                validate({ _id, email, newEmail, username, password })

                return User.findOne({ _id })
            })
            .then(user => {
                if (!user) throw Error('user does not exists')

                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                //return User.updateOne({ id }, { $set: { name, surname, email, username: newUsername, password: newPassword } }) // NOTE $set also works here, but it can be simplified as following statement
                return User.updateOne({ _id }, { email: newEmail, username, password })
            })
    },

    //It will delete a user by username and password
    deleteUser(_id, username, password) {

        return Promise.resolve()
            .then(() => {
                validate({ _id, username, password })

                return User.findOne({ _id })
            })
            .then(user => {
                if (!user) throw Error('user does not exists')

                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                return User.deleteOne({ _id })
            })
    },

    /***********************Courses Logic*********************/

    //It will list all courses from the selected language
    listCoursesByLanguage(language) {
        return Course.find({ language })
            .then(courses=>{
               return User.populate(courses,{path:'teacher'})
            })
    },

    //It will list all courses from the selected teacher
    listCoursesByTeacher(teacher) {
        return Course.find({ teacher })
    },

    //It will create a course
    createCourse(title, language, price, teacher) {

        return Promise.resolve()
            .then(() => {
                validate({ title, language, price, teacher })

                return Course.create({ title, language, price, teacher })
            })
            .then(({ _id }) => _id)
    },

        //It will list one course
        retrieveCourse(_id) {
        
            return Promise.resolve()
                .then(() => {
                    
                    validate({ _id })
    
                    return Course.findOne({ _id })
                })
                .then(course => {
                    if (!course) throw Error('user does not exist')
    
                    return course
                })
        },

        //It will delete a course by id
        deleteCourse(_id, idOfCourse) {

            return Promise.resolve()
                .then(() => {
                    validate({ _id, idOfCourse })

                    return Course.findOne({ '_id': idOfCourse, 'teacher': _id })
                })
                .then(course => {
                    if (!course) throw Error('course does not exist')

                    return Course.deleteOne({ '_id': idOfCourse })
                })
        }
}

module.exports = logic