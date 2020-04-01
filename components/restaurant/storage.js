const Model = require('./model')

const addRestaurant = async restaurant => {
    const newRestaurant = new Model(restaurant)
    const result = await newRestaurant.save()
    return result
}

module.exports = {
    addRestaurant
}