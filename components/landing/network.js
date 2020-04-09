const express = require('express')
const response = require('../../network/response')
const controller = require('../restaurant/controller') // ! THIS IS ONLY PROVISIONAL

const router = express.Router()

// TODO: USE CORRECT LANDING ROUTING AND LOGIC
router.get('/', (req, res) => {
    controller.getRestaurants({})
    .then(restaurants => {
        console.log(restaurants)
        res.render('index.ejs', { restaurants:restaurants })
    })
    .catch(error => {
        console.log(error)
        response.error(req, res, 'Couldnt get Restaurants')
    })
})

module.exports = router