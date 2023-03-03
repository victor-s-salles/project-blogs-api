const { Category } = require('../models');

const insertCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const findAllCategories = async () => {
    const allCategories = await Category.findAll();
    return allCategories;
};

module.exports = {
    insertCategory,
    findAllCategories,
};