'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mammography', { 
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

      last_mammography: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      nodulo_na_mama: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      mama_avaliada_anteriormente: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      radio_ou_quimio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      cirurgia: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mammography');
  }
};
