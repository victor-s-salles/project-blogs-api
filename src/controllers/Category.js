const { insertCategory, findAllCategories } = require('../services');

const insertNewCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const newCategory = await insertCategory(name);

    return res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
    const allCategories = await findAllCategories();

    return res.status(200).json(allCategories);
};

module.exports = {
    insertNewCategory,
    getAllCategories,
};