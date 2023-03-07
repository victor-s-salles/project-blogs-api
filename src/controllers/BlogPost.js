const { findAllPosts, findPostById, editPost } = require('../services');

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

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400).json({ message: 'Some required fields are missing' });
    }

    const post = await editPost({ postId: id, title, content, userId: req.user.id });

    if (post.type) {
        return res.status(401).json({ message: post.message });
    }
    const newPost = await findPostById(id);

    return res.status(200).json(newPost.message);
};

module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
};