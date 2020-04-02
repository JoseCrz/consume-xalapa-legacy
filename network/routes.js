const restaurantRoutes = require('../components/restaurant/network')

const routes = app => {
    app.use('/restaurants', restaurantRoutes)
}

module.exports = routes