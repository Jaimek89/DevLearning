// TODO all logic here
const Course = require('../models/Course')

module.exports = {
    list() {
        return Course.find({})
    }
}