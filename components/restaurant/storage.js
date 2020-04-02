const Model = require('./model')

const addRestaurant = async restaurant => {
    const newRestaurant = new Model(restaurant)
    const result = await newRestaurant.save()
    return result
}

const getRestaurants = async filter => {
    const restaurants = await Model.find(filter)
    return restaurants
}

module.exports = {
    addRestaurant,
    getRestaurants
}