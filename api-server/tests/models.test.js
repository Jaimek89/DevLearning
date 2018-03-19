const mongoose = require('mongoose')
const assert = require('assert')
const { User, Course } = require('../src/models')

describe('models', () => {
    before(done => {
        mongoose.connect('mongodb://localhost/devlearning-models-test')

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
        let user

        before(done => {
            user = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            user.save()
                .then(_user => {
                    user = _user

                    done()
                })
                .catch(done)
        })

        it('should create user', () => {
            assert(user, 'should user been saved')     

            assert.equal(user.name, 'name', 'shouls user name match')
            assert.equal(user.surname, 'surname', 'should user surname match')
            assert.equal(user.email, 'email', 'shuold user email match')
            assert.equal(user.username, 'username', 'should user username match')
            assert.equal(user.password, 'password', 'should user password match')
        })
    })

    describe('create course', () => {
        let teacher, course

        before(done => {
            teacher = new User({
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username',
                password: 'password'
            })

            course = new Course({
                title: 'title',
                language: 'language',
                price: 10,
                teacher: teacher._id
            })

            Promise.all([
                teacher.save()
                    .then(_teacher => teacher = _teacher),

                course.save()
                    .then(_course => course = _course)
            ])
                .then(() => {
                    done()
                })
                .catch(done)
        })

        it('should create course', () => {
            assert(teacher, 'should teacher been saved')

            assert(course, 'should course been saved')

            assert.equal(course.title, 'title', 'should course title match')
            assert.equal(course.language, 'language', 'should course language match')
            assert.equal(course.price, 10, 'should course price match')

            assert.equal(course.teacher.toString(), teacher._id.toString(), 'should course teacher match')
        })
    })

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
                name: 'name',
                surname: 'surname',
                email: 'email',
                username: 'username-student',
                password: 'password'
            })

            course = new Course({
                title: 'title',
                language: 'language',
                price: 10,
                teacher: teacher._id
            })

            Promise.all([
                teacher.save()
                    .then(_teacher => teacher = _teacher),

                student.save()
                    .then(_student => student = _student),

                course.save()
                    .then(_course => course = _course)
            ])
                .then(() => {
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
            assert(teacher, 'should teacher been saved')

            assert(student, 'should student been saved')

            assert(course, 'should course been saved')

            assert.equal(course.title, 'title', 'should course title match')
            assert.equal(course.language, 'language', 'should language match')
            assert.equal(course.price, 10, 'should course price match')

            assert.equal(course.teacher.toString(), teacher._id.toString(), 'should course teacher match')

            assert.equal(course.student.toString(), student._id.toString(), 'should course student match')
        })
    })

    // TODO add more test cases

    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})