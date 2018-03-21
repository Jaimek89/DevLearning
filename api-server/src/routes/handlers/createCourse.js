const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { title, language, price, teacher } } = req

    logic.createCourse(title, language, price, teacher)
        .then(_id => {
            res.json(success({ _id }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}