'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cpf: {
        type: Sequelize.STRING,
        unique: true,
      },

      sus_card: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      birth_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      age: {
        type: Sequelize.INTEGER,
      },

      mother_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
