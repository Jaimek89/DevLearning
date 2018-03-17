// TODO all logic here
const Course = require('../models/Course')

module.exports = {
    list(id) {
        return Course.find({'languageId':id})
    }
}