const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const {idUser} = req.tokenDecrypt

    logic.retrieveUser(idUser)
        .then(user => {
            res.json(success(user))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}