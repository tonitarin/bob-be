const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const UserRoutes = require('./routes/User')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(UserRoutes)

const mongoDB = 'mongodb://127.0.0.1/bob'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('connected', () => console.log('Database connected'))

app.listen(8080, () => {
  /* eslint-disable */ console.log('Server running on port 8080')
})

module.exports = app