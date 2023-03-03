const Login = require('./Login');
const { createNewUser, listAllUsers, getUserById } = require('./User');

module.exports = {
    Login,
    createNewUser,
    listAllUsers,
    getUserById,
};