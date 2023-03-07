const express = require('express');

const { createNewPost, getAllPosts, getPostById, 
        updatePost, removePost, searchPostByQ } = require('../controllers');
const { validateJWT } = require('../middlewares');

const router = express.Router();

router.get('/search', validateJWT, searchPostByQ);

router.put('/:id', validateJWT, updatePost);

router.get('/:id', validateJWT, getPostById);

router.delete('/:id', validateJWT, removePost);

router.post('/', validateJWT, createNewPost);

router.get('/', validateJWT, getAllPosts);

module.exports = router;