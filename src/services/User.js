const { User } = require('../models');

const getByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};
const createUser = async ({ displayName, email, password, image }) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

const findAllUsers = async () => {
    const allUser = await User.findAll({ attributes: { exclude: 'password' } });
    return allUser;
};
module.exports = {
    getByEmail,
    createUser,
    findAllUsers,
};