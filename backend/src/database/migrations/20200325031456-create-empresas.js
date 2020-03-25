'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tbl_empresas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome_representante: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email_representante: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    },
    celular_representante: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    razao_social: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    },
    nome_empresa:{
      allowNull: false,
      type: Sequelize.STRING,
    },
    cnpj:{
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    },
    senha: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    telefone:{
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
    bairro:{
      allowNull: false,
      type: Sequelize.STRING
    },
    logradouro:{
      allowNull: false,
      type: Sequelize.STRING
    },
    numero:{
      allowNull: false,
      type: Sequelize.STRING
    },
    complemento:{
      allowNull: true,
      type: Sequelize.STRING
    },
    uf:{
      allowNull: false,
      type: Sequelize.STRING
    },
    tipo_servico:{
      allowNull: false,
      type: Sequelize.STRING
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('tbl_empresas')
};
