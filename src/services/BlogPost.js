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
    const post = await BlogPost.findByPk(id);
    return post;
};

const editPost = async () => {
    
};

module.exports = {
    findAllPosts, findPostById, editPost,
};