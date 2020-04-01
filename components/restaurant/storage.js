const Model = require('./model')

const addRestaurant = restaurant => {
    const newRestaurant = new Model(restaurant)
    newRestaurant.save()
}

module.exports = {
    addRestaurant
}