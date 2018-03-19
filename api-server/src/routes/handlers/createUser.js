const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, email, username, password } } = req

    logic.createUser(name, surname, email, username, password)
        .then(_id => {
            res.json(success({ _id }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}