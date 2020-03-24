'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tbl_usuarios', {
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
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    },
    senha: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    data_nascimento:{
      allowNull: false,
      type: Sequelize.DATEONLY
    },
    sexo:{
      allowNull: false,
      type: Sequelize.STRING
    },
    cpf:{
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    },
    celular:{
      allowNull: false,
      type: Sequelize.STRING
    },
    cep:{
      allowNull: false,
      type: Sequelize.STRING
    },
    cidade:{
      allowNull: false,
      type: Sequelize.STRING
    },
    bairro: {
      allowNull: false,
      type: Sequelize.STRING
    },
    logradouro:{
      allowNull: false,
      type: Sequelize.STRING
    },
    uf:{
      allowNull: false,
      type: Sequelize.STRING
    },
    url_foto:{
      allowNull: false,
      type: Sequelize.STRING
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    }
  }),

  down: (queryInterface) => queryInterface.dropTable('tbl_usuarios'),
};
