const express = require('express')
const multer = require('multer')
const response = require('../../network/response')
const controller = require('./controller')
const categoryController = require('../category/controller')

const router = express.Router()

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/')
    },
    filename: (req, file, cb) => {
        const splitedName = file.originalname.split('.')
        const extension = splitedName[splitedName.length - 1]
        cb(null, `${Date.now()}.${extension}`)
    }
})

const upload = multer({
    storage: multerStorage
})

router.get('/', (req, res) => {
    controller.getRestaurants({})
    .then(restaurants => {
        console.log(restaurants)
        res.render('restaurants.ejs', { restaurants:restaurants })
    })
    .catch(error => {
        console.log(error)
        response.error(req, res, 'Couldnt get Restaurants')
    })
})

router.get('/add', (req, res) => {
    categoryController.getCategories()
    .then(categories => {
        // console.log(categories)
        const numbers = []
        for (let i = 0; i<=1380; i+=60){
            numbers.push((i/60))
        }
        const times = numbers.map(item => {
            if (item > 11) {
                if (item === 12) {
                    return "12:00PM"
                }
                return `${item-12}:00PM`
            } else {
                return `${item}:00AM`
            }
        })
        res.render('addRestaurants.ejs', { categories:categories, times:times })
    }).catch(error => {
        console.log(error)
        response.error(req, res, 'Could not get categories', 401)
    })
})

router.post('/', upload.single('image') ,(req, res) => {
    console.log(req.file)
    // console.log(req.body)
    const restaurant = req.body
    restaurant.imageUrl = req.file.filename
    console.log(restaurant)
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