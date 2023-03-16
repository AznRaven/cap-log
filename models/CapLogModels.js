const mongoose = require('mongoose')
const capLogs = require('./capLogs')

const Schema = mongoose.Schema

const capLogsSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
})

const CapLogs = mongoose.model('capLogs', capLogsSchema)

module.exports = CapLogs