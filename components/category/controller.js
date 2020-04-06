const storage = require('./storage')

const addCategory = (name = null) => {
    return new Promise( async (resolve, reject) => {
        if (!name) {
            reject('No category name')
        }

        const category = {
            name: name.trim()
        }

        const createdCategory = await storage.addCategory(category)
        resolve(createdCategory)
    })
}

const getCategories = () => {
    return new Promise(async (resolve, reject) => {
        const categories = await storage.getCategories()
        resolve(categories)
    })
}

module.exports = {
    addCategory,
    getCategories
}