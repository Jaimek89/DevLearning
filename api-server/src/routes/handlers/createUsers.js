const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, email, username, password } } = req

    logic.createUsers(name, surname, email, username, password)
        .then(username => {
            res.json(success({ username }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}