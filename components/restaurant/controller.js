const storage = require('./storage')

const addRestaurant = ({name = null, category = null, schedule = null, workDays = null, tags = null, menu = null, channel = null, website = null, phone = null, whatsapp = null, facebook = null, instagram = null, address = null}) => {
    return new Promise( async (resolve, reject) => {
        if (!name || !category || !schedule || !workDays || !tags || !menu || !website || !phone || !address ) {
            console.log('Missing restaurant info')
            reject('Invalid data')
        }
        const restaurant = {
            name,
            category,
            schedule,
            workDays,
            tags,
            menu,
            channel,
            website,
            phone,
            whatsapp,
            facebook,
            instagram,
            address
        }

        console.log('restaurant:', restaurant)
        const createdRestaurant = await storage.addRestaurant(restaurant)
        resolve(createdRestaurant)
    })
}
const getRestaurants = filter => {
    return new Promise ( async (resolve, reject) => {
        const restaurants = await storage.getRestaurants(filter)
        resolve(restaurants)
    })
}
module.exports = {
    addRestaurant,
    getRestaurants,
}