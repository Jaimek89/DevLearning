const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { email, newEmail, username, password } } = req
    const { params: { id } } = req

    logic.updateUser(id, email, newEmail, username, password)
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}