const express = require('express');

const { createNewUser, listAllUsers, getUserById, deleteUser } = require('../controllers');
const { validateFieldsNewUser, validateExistingUser, validateJWT } = require('../middlewares');

const router = express.Router();

router.post('/', validateFieldsNewUser, validateExistingUser, createNewUser);

router.get('/', validateJWT, listAllUsers);

router.delete('/me', validateJWT, deleteUser);

router.get('/:id', validateJWT, getUserById);

module.exports = router;