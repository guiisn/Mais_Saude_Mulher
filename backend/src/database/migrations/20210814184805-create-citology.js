'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('citology', { 
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

      last_citology: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      usa_diu: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      usa_anticoncepcional: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      radio_ou_quimio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      data_menstruacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('citology');
  }
};
