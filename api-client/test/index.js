require('dotenv').config()

const api = require('../index')
const assert = require('assert')

const { PORT, HOST, PROTOCOL } = process.env

api.protocol = PROTOCOL
api.host = HOST
api.port = PORT

describe('probando api client', () => {
    it('should return a list', done => {
        api.list()
            .then((res) => {
                assert.equal(res.status, 'OK', 'Should return OK')
                done()
            })
            .catch(done)
    })
})