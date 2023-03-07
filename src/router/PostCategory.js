const express = require('express');

const { createNewPost, getAllPosts } = require('../controllers');
const { validateJWT } = require('../middlewares');

const router = express.Router();

router.post('/', validateJWT, createNewPost);

router.get('/', validateJWT, getAllPosts);

module.exports = router;