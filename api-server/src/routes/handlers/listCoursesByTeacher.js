const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { teacher } } = req
    logic.listCoursesByTeacher(teacher)
        .then(courses => res.json( success(courses) ))
        .catch(err => res.json(fail(err.message)))
}