const express = require('express');

const { insertNewCategory, getAllCategories } = require('../controllers');

const { validateJWT } = require('../middlewares');

const router = express.Router();

router.post('/', validateJWT, insertNewCategory);

router.get('/', validateJWT, getAllCategories);

module.exports = router;