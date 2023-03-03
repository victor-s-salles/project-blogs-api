const Login = require('./Login');
const { createNewUser, listAllUsers, getUserById } = require('./User');
const { insertNewCategory, getAllCategories } = require('./Category');

module.exports = {
    Login,
    createNewUser,
    listAllUsers,
    getUserById,
    insertNewCategory,
    getAllCategories,
};