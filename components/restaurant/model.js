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
    schedule: {
        opens: {
            type: String,
            required: true
        },
        closes: {
            type: String,
            required: true
        }
    },
    workDays: {
        mon: {
            type: Boolean,
        },
        tue: {
            type: Boolean,
        },
        wed: {
            type: Boolean,
        },
        thu: {
            type: Boolean,
        },
        fri: {
            type: Boolean,
        },
        sat: {
            type: Boolean,
        },
        sun: {
            type: Boolean,
        },
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
    order: {
        channel: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        }
    },
    website: String,
    phone: String,
    address: String,
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model('Restaurant', restaurantSchema)

module.exports = model