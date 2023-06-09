/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },{
        underscored: true,
        timestamps: true,
        modelName: "blog_posts",
        createdAt: 'published',
        updatedAt: 'updated'
    })
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,{
            foreignKey: {name: "userId", field: "user_id"},
            as: 'user'
        })
    }
    return BlogPost
}