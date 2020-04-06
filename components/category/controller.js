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

module.exports = {
    addCategory,
}