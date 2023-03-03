const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};
const generateToken = (user) => {
    const token = jwt.sign({ payload: { userId: user.id } }, secret, jwtConfig);
    return token;
};

module.exports = generateToken;