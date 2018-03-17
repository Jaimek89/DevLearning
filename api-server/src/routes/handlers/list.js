const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {

    logic.list(req.params.id)
        .then(courses => res.json( success(courses) ))
        .catch(err => res.json(fail(err.message)))
}