// TODO implement api server

require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const { PORT, MONGO_URL } = process.env

mongoose.connect(MONGO_URL)

const app = express()

app.use(cors())

app.use('/api', routes)

app.listen(PORT, () => console.log(`DevLearning api running on port ${PORT}`))