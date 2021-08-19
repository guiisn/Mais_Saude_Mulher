'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('address', { 
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

      name_road: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      number_road: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },

      district: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('address');
  }
};
