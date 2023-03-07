const { PostCategory, Category, BlogPost, sequelize } = require('../models');

const insertNewPost = async (post) => {
    const { id, title, content, categoryIds } = post;

    const categories = await Category.findAll({ where: { id: categoryIds } });

    if (categories.length > categoryIds.length) {
        return { type: 'NOTFOUND', message: 'one or more "categoryIds" not found' };
    }
    try {
    const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create({ title, content, userId: id }, { transaction: t });
    await Promise.all(categoryIds.map(async (categoryId) => PostCategory
                        .create({ postId: newPost.id, categoryId }, { transaction: t })));
            return newPost;
        });
         return { type: null, message: result };
    } catch (error) {
        return { type: 'NOTFOUND', message: error };
    }
};

module.exports = {
    insertNewPost,
};