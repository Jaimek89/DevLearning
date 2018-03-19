const mongoose = require('mongoose')
const assert = require('assert')
const { User, Course } = require('../src/models')
const logic = require('../src/logic')

describe('logic', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/devlearning-logic-test')
        // mongoose.connect('mongodb://jaime:123@ds211309.mlab.com:11309/devlearning')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    beforeEach(async () => {
        const db = mongoose.connection

        await Promise.all([
            User.remove(),
            Course.remove()
        ])
    })

    describe('create user', () => {
        let id

        before(done => {
            logic.createUser('name', 'surname', 'email', 'username', 'password')
                .then(_id => id = _id)
                .then(() => done())
                .catch(done)
        })

        it('should create user', () => {
            assert(id, 'should id be returned')
        })
    })

    // TODO add more test cases

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})