const express = require('express');

const { createNewPost, getAllPosts, getPostById } = require('../controllers');
const { validateJWT } = require('../middlewares');

const router = express.Router();

router.get('/:id', validateJWT, getPostById);

router.post('/', validateJWT, createNewPost);

router.get('/', validateJWT, getAllPosts);

module.exports = router;