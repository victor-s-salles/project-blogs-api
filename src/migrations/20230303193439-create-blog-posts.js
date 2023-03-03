'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER,
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
      published: Sequelize.DATE,
      updated: Sequelize.DATE,
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts')
  }
};
