const { getByEmail, createUser, 
        findAllUsers, findUserById, 
      } = require('./User');
const { findAllCategories, insertCategory } = require('./Category');

module.exports = {
    getByEmail,
    createUser,
    findAllUsers,
    findUserById,
    findAllCategories,
    insertCategory,
};