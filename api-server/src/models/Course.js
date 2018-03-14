const mongoose = require('mongoose')
const User = require('./User')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Course = mongoose.model('courses', new Schema({
    title: String,
    language: String,
    price: Number,
    score: Number,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}))

module.exports = Course