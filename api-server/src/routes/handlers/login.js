const { success, fail } = require('./api-utils')
const logic = require('../../logic')
const jwt = require('jsonwebtoken')

const { JWT_SECRET: secret, JWT_EXP: expiration } = process.env

const expiresIn = parseInt(expiration)

module.exports = (req, res) => {
    const { body: { username, password } } = req

    logic.login(username, password)
        .then(user => {
            const token = jwt.sign({ idUser: user._id }, secret, { expiresIn })
            const name= user.name
            res.json(success({ token, name }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}