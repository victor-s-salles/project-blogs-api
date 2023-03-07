const express = require('express');

const { createNewPost } = require('../controllers');
const { validateJWT } = require('../middlewares');

const router = express.Router();

router.post('/', validateJWT, createNewPost);

module.exports = router;