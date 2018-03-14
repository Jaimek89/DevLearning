const mongoose = require('mongoose')
const assert = require('assert')
const { User, Course } = require('../src/models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/devlearning-test')

        const db = mongoose.connection

        db.on('error', done)

        db.once('open', done)
    })

    it('should create user', done => {
        const user = new User({
            name: 'name',
            surname: 'surname',
            email: 'email',
            username: 'username',
            password: 'password'
        })

        assert(user._id, 'should have _id before saving')

        user.save()
            .then(user => {
                assert(user, 'should have saved user')

                done()
            })
            .catch(done)
    })

    it('should create course', done => {
        const course = new User({
            title: 'name',
            language: 'JavaScript',
            score: Number,
            price: Number
        })

        assert(course._id, 'should have _id before saving')

        course.save()
            .then(course => {
                assert(course, 'should have saved course')

                done()
            })
            .catch(done)
    })

    it('should relate course with teacher and student', done => {
        const teacher = new User({
            name: 'name-teacher',
            surname: 'surname',
            email: 'email',
            username: 'username',
            password: 'password'
        })

        const student = new User({
            name: 'name-student',
            surname: 'surname',
            email: 'email',
            username: 'username',
            password: 'password'
        })

        const course = new User({
            title: 'name',
            language: 'JavaScript',
            score: Number,
            price: Number
        })

        Promise.all([teacher.save(), student.save(), course.save()])
            .then(() => {
                course.teacher = teacher._id

                course.student = student._id

                return course.save()
            })
            .then(course => {
                assert.equal(course.teacher, teacher._id, 'course teacher should match')

                assert.equal(course.student, student._id, 'course teacher should match')

                done()
            })
            .catch(done)
    })

    // grouping case before in describe (example) ->

    describe('relate course with teacher and student', () => {
        let teacher, student, course

        before(done => {
            teacher = new User({
                name: 'name-teacher',
                surname: 'surname',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            student = new User({
                name: 'name-student',
                surname: 'surname',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            course = new User({
                title: 'name',
                language: 'JavaScript',
                score: Number,
                price: Number
            })

            Promise.all([teacher.save(), student.save(), course.save()])
                .then(() => {
                    course.teacher = teacher._id

                    course.student = student._id

                    return course.save()
                })
                .then(_course => {
                    course = _course

                    done()
                })
                .catch(done)
        })

        it('should relate course with teacher and student', () => {
            assert.equal(course.teacher, teacher._id, 'course teacher should match')

            assert.equal(course.student, student._id, 'course teacher should match')
        })
    })

    // <-

    // TODO add more test cases

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})