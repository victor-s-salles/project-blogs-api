const { getByEmail, createUser, 
        findAllUsers, findUserById, removeUser,
      } = require('./User');
const { findAllCategories, insertCategory } = require('./Category');
const { insertNewPost } = require('./PostCategory');
const { findAllPosts, findPostById, editPost, deletePost } = require('./BlogPost');

module.exports = {
    getByEmail,
    createUser,
    findAllUsers,
    findUserById,
    findAllCategories,
    insertCategory,
    insertNewPost,
    findAllPosts,
    findPostById,
    editPost,
    deletePost,
    removeUser,
};