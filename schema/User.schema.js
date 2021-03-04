const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name: String,
    bags: String
})

module.exports = mongoose.model('users', personSchema)