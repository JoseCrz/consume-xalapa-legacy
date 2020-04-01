const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', (req, res) => {
    const restaurant = req.body
    // console.log(restaurant)
    controller.addRestaurant(restaurant)
        .then(addedRestaurant => {
            response.success(req, res, addedRestaurant, 201)
        })
        .catch(error => {
            console.log(error)
            response.error(req, res, 'Something went horrible wrong :(', 500)
        })
})

module.exports = router