const restaurantRoutes = require('../components/restaurant/network')

const routes = app => {
    app.use('/restaurant', restaurantRoutes)
}

module.exports = routes