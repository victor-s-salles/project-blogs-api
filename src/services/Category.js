const { Category } = require('../models');

const insertCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const findAllCategories = async () => Category.findAll();

module.exports = {
    insertCategory,
    findAllCategories,
};