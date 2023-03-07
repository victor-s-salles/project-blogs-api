const express = require('express');

const { createNewPost, getAllPosts, getPostById, 
        updatePost, removePost } = require('../controllers');
const { validateJWT } = require('../middlewares');

const router = express.Router();
router.put('/:id', validateJWT, updatePost);

router.get('/:id', validateJWT, getPostById);

router.delete('/:id', validateJWT, removePost);

router.post('/', validateJWT, createNewPost);

router.get('/', validateJWT, getAllPosts);

module.exports = router;