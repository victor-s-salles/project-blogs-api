const { getByEmail, createUser, 
        findAllUsers, findUserById, 
      } = require('./User');
const { findAllCategories, insertCategory } = require('./Category');
const { insertNewPost } = require('./PostCategory');
const { findAllPosts, findPostById, editPost } = require('./BlogPost');

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
};