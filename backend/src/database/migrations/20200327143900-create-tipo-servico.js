'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tbl_tipo_servicos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    }
  }),

  down: (queryInterface) => queryInterface.dropTable('tbl_tipo_servicos')
};
