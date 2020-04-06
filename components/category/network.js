const express = require('express')
// const multer = require('multer')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', (req, res) => {
    // http://localhost:3000/category?name=mexicana
    const name = req.query.name
    controller.addCategory(name)
        .then (createdCategory => {
            response.success(req, res, createdCategory, 201)
        })
        .catch(error => {
            console.log(error)
            response.error(req, res, 'Something went wrong', 500)
        })
})

module.exports = router