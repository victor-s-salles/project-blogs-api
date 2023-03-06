/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        timestamps: false,
        underscored: true,
        modelName: 'users'
    })
    User.associate = (models) =>{
        models.User.hasMany(models.BlogPost, {
            foreignKey: "id", as: "blogPosts",
        })
    }
    return User;
}