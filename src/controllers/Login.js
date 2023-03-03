const generateToken = require('../auth/generateToken');
const { getByEmail } = require('../services');

const isBodyValid = (email, password) => email && password;

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!isBodyValid(email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }

        const user = await getByEmail(email);

        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid fields' });
        }   
        const token = generateToken(user);
        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno' });
    }
};

module.exports = Login;