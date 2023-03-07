const Login = require('./Login');
const { createNewUser, listAllUsers, getUserById, deleteUser } = require('./User');
const { insertNewCategory, getAllCategories } = require('./Category');
const { createNewPost } = require('./PostCategory');
const { getAllPosts, getPostById, updatePost, removePost } = require('./BlogPost');

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
    removePost,
    deleteUser,
};