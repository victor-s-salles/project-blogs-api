const { getByEmail, createUser, 
        findAllUsers, findUserById, 
      } = require('./User');
const { findAllCategories, insertCategory } = require('./Category');
const { insertNewPost } = require('./PostCategory');

module.exports = {
    getByEmail,
    createUser,
    findAllUsers,
    findUserById,
    findAllCategories,
    insertCategory,
    insertNewPost,
};