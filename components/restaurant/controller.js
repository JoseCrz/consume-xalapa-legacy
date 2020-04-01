const storage = require('./storage')

const addRestaurant = ({name = null, category = null, schedule = null, workDays = null, tags = null, menu = null, order = null, website = null, phone = null, address = null}) => {
    return new Promise( async (resolve, reject) => {
        if (!name || !category || !schedule || !workDays || !tags || !menu || !order || !website || !phone || !address ) {
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
            order,
            website,
            phone,
            address
        }

        console.log('restaurant:', restaurant)
        const createdRestaurant = await storage.addRestaurant(restaurant)
        resolve(createdRestaurant)
    })
}

module.exports = {
    addRestaurant,
}