'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tbl_pets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    especie: {
      allowNull: false,
      type: Sequelize.STRING
    },
    sexo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    situacao: {
      allowNull: false,
      type: Sequelize.STRING
    },
    descricao: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    descricao_comportamento: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    porte: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    idade: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.STRING,
      allowNull: false
    },
    longitude: {
      type: Sequelize.STRING,
      allowNull: false
    },
    url_foto: {
      allowNull: false,
      type: Sequelize.STRING
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_usuarios',
        key: 'id'
      }
    }
  }),

  down: (queryInterface) => queryInterface.dropTable('tbl_pets'),
};
