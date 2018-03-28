const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req
    const { body: { idOfCourse } } = req

    logic.deleteCourse(id, idOfCourse)
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}