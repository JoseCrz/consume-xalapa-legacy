const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    active: {
        type: Boolean,
        default: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    opens: {
        type: String,
        required: true
    },
    closes: {
        type: String,
        required: true
    },
    mon: {
        type: String,
        default: 'off'
    },
    tue: {
        type: String,
        default: 'off'
    },
    wed: {
        type: String,
        default: 'off'
    },
    thu: {
        type: String,
        default: 'off'
    },
    fri: {
        type: String,
        default: 'off'
    },
    sat: {
        type: String,
        default: 'off'
    },
    sun: {
        type: String,
        default: 'off'
    },
    tags: [
        {
            type: String,
        }
    ],
    menu: [
        {
            type: String,
        }
    ],
    channel: {
        type: String,
        required: true
    },
    website: String,
    phone: String,
    whatsapp: String,
    facebook: String,
    instagram: String,
    address: String,
    imageUrl: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    priority: {
        type: Number,
        default: 5
    }
})

const model = mongoose.model('Restaurant', restaurantSchema)

module.exports = model