const Login = require('./Login');
const { createNewUser, listAllUsers, getUserById } = require('./User');
const { insertNewCategory, getAllCategories } = require('./Category');
const { createNewPost } = require('./PostCategory');
const { getAllPosts, getPostById, updatePost } = require('./BlogPost');

module.exports = {
    Login,
    createNewUser,
    listAllUsers,
    getUserById,
    insertNewCategory,
    getAllCategories,
    createNewPost,
    getAllPosts,
    getPostById,
    updatePost,
};