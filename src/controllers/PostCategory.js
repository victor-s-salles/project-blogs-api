const { insertNewPost } = require('../services');

const createNewPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const newPost = await insertNewPost({ id, title, content, categoryIds });

    if (newPost.type) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    return res.status(201).json(newPost.message);
};

module.exports = {
    createNewPost,
};