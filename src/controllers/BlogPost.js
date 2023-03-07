const { findAllPosts } = require('../services');

const getAllPosts = async (req, res) => {
    const posts = await findAllPosts();

    if (posts.type) {
        return res.status(200).json({ message: 'Ocorreu um erro interno' });
    }
    return res.status(200).json(posts.message);
};

module.exports = {
    getAllPosts,
};