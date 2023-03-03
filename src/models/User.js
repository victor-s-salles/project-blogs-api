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
            allowNull: false
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
    return User;
}