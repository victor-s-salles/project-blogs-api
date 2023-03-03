/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, _DataTypes) =>{
    const User = sequelize.define('User',{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        displayName: sequelize.STRING,
        email: sequelize.STRING,
        password: sequelize.STRING,
        image: sequelize.STRING,
    },
    {
        timestamps: false,
        underscored: true,
        modelName: 'users'
    })
    return User;
}