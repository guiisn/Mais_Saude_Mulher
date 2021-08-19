'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('health_unity', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      health_unity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('health_unity');
  }
};
