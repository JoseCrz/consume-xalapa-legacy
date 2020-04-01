const storage = require('./storage')

const addRestaurant = (name, category, schedule, workDays, tags, menu, order, website, phone, address) => {
    return new Promise((resolve, reject) => {
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
        storage.addRestaurant(restaurant)
        resolve(restaurant)
    })
}

module.exports = {
    addRestaurant,
}