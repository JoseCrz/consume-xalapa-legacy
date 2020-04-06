const restaurantRoutes = require('../components/restaurant/network')
const categoryRoutes = require('../components/category/network')

const routes = app => {
    app.use('/restaurants', restaurantRoutes)
    app.use('/category', categoryRoutes)
}

module.exports = routes