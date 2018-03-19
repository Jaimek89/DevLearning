// TODO all logic here
const Course = require('../models/Course')

module.exports = {
    //It will list all courses from the selected language
    listCourses(id) {
        return Course.find({'languageId':id})
    }
}