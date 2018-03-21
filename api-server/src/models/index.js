const mongoose = require('mongoose')
const {Schema, Schema: { ObjectId }} = mongoose

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


const Course = new Schema({
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        default: 80
    },
    teacher: { 
        type: ObjectId, 
        ref: 'User',
        required: true
    },
    student: {
        type: ObjectId,
        ref: 'User'
    }
})

module.exports = {
    User: mongoose.model('User', User),
    Course: mongoose.model('Course', Course)
}