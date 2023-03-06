/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }
    },{
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories'
    })

    PostCategory.associate = (models) =>{
        models.BlogPost.belongsToMany(models.Category,{
            foreignKey: {name: "categoryId", field: "category_id"}, 
            as: 'categories',
            through: PostCategory,
        })
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: {name: "postId", field: "post_id"},
            as: 'posts',
            through: PostCategory,
        })
    }
    return PostCategory
}