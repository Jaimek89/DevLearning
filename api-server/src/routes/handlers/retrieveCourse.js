const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req

    logic.retrieveCourse(id)
        .then(course => {
            res.json(success(course))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}