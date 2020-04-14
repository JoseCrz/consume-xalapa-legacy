const landingRoutes = require('../components/landing/network')
const restaurantRoutes = require('../components/restaurant/network')
const categoryRoutes = require('../components/category/network')
const mapRoutes = require('../components/map/network')

const routes = app => {
    app.use('/', landingRoutes)
    app.use('/restaurants', restaurantRoutes)
    app.use('/category', categoryRoutes)
    app.use('/mapa', mapRoutes)
}

module.exports = routes