const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model('Category', categorySchema)

module.exports = model