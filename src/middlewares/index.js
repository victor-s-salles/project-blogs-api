const validateJWT = require('./validateJWT');

const validateExistingUser = require('./validateExistingUser');

const validateFieldsNewUser = require('./validateFieldsNewUser');

module.exports = {
    validateJWT,
    validateExistingUser,
    validateFieldsNewUser,
};