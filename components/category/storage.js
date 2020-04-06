const Model = require('./model')

const addCategory = async category => {
    const newCategory = new Model(category)
    const result = await newCategory.save()
    return result
}

const getCategories = async () => {
    const categories = await Model.find({})
    return categories
}

module.exports = {
    addCategory,
    getCategories
}