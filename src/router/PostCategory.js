const express = require('express');

const { createNewPost, getAllPosts, getPostById, updatePost } = require('../controllers');
const { validateJWT } = require('../middlewares');

const router = express.Router();
router.put('/:id', validateJWT, updatePost);

router.get('/:id', validateJWT, getPostById);

router.post('/', validateJWT, createNewPost);

router.get('/', validateJWT, getAllPosts);

module.exports = router;