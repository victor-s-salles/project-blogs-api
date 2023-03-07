const { BlogPost, User, Category } = require('../models');

const findAllPosts = async () => {
  try {
    const posts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return { type: '', message: posts };
  } catch (error) {
        return { type: 'ERROR', message: error };
  }
};

const findPostById = async (id) => {
  try {
    const post = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!post) {
        return { type: 'NOTFOUND' };
    }
    return { type: '', message: post };
  } catch (error) {
    return { type: 'ERROR', message: error };
  }
};

const editPost = async ({ postId, userId, title, content }) => {
    const oldPost = await BlogPost.findOne({ where: { id: postId } });

    if (!oldPost) {
        return { type: 'NOTFOUND', message: 'Post not found' };
    }

    if (oldPost.userId !== userId) {
        return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
    }

    const updatedPost = await BlogPost.update({ title, content }, { where: { id: postId } });

    return { type: '', message: updatedPost };
};

module.exports = {
    findAllPosts, findPostById, editPost,
};