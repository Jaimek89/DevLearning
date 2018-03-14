const mongoose = require('mongoose')
const Courses = require('./User')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const User = new Schema({
    name: String,
    surname: String,
    email: String,
    username: String,
    password: String
})

module.exports = mongoose.model('users', User)