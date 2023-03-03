const generateToken = require('../auth/generateToken');
const { createUser, findAllUsers, findUserById } = require('../services');

const createNewUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const newUser = await createUser({ displayName, email, password, image });
        const token = generateToken(newUser);

        return res.status(201).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const listAllUsers = async (req, res) => {
    try {
       const allUser = await findAllUsers();
        return res.status(200).json(allUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await findUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'User does not exist' });
        }
         return res.status(200).json(user);
     } catch (error) {
         console.log(error);
         return res.status(500).json({ message: 'Erro interno' });
     }
};
module.exports = { createNewUser, listAllUsers, getUserById };