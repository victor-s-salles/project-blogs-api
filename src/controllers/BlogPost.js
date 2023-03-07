const { findAllPosts, findPostById } = require('../services');

const getAllPosts = async (_req, res) => {
    const posts = await findAllPosts();

    if (posts.type) {
        return res.status(404).json({ message: 'Ocorreu um erro interno' });
    }
    return res.status(200).json(posts.message);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await findPostById(id);

    if (post.type) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(200).json(post.message);
};

module.exports = {
    getAllPosts,
    getPostById,
};