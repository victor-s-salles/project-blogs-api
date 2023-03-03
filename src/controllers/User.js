const generateToken = require('../auth/generateToken');
const { createUser } = require('../services');

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
module.exports = { createNewUser };