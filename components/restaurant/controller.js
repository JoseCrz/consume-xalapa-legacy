const storage = require('./storage')

const addRestaurant = ({name = null, category = null, opens = null, closes = null, mon = null, tue = null, wed = null, thu = null, fri = null, sat = null, sun = null, tags = null, menu = null, channel = null, website = null, phone = null, whatsapp = null, facebook = null, instagram = null, imageUrl = null, address = null}) => {
    return new Promise( async (resolve, reject) => {
        if (!name || !category || !opens || !closes || !tags || !menu || !website || !phone || !imageUrl || !address ) {
            console.log('Missing restaurant info')
            reject('Invalid data')
        }
        const restaurant = {
            name,
            category,
            opens,
            closes,
            mon,
            tue,
            wed,
            thu,
            fri,
            sat,
            sun,
            tags: tags.split(',').map(tag => tag.trim()),
            menu: menu.split(',').map(item => item.trim()),
            channel,
            website,
            phone,
            whatsapp,
            facebook,
            instagram,
            imageUrl,
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