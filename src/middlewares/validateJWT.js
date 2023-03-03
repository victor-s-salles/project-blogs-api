const jwt = require('jsonwebtoken');
const { getByEmail } = require('../services');

require('dotenv/config');

const secret = process.env.JWT_SECRET; 

const validateJWT = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        const user = await getByEmail(decoded.payload.email);
        if (!user) {
            return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
          }
      
          req.user = user;
      
          next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = validateJWT;