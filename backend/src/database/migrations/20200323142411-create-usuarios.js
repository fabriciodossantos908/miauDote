'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tbl_usuarios', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username:{
      allowNull: false,
      type: Sequelize.STRING,
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
    numero:{
      allowNull: false,
      type: Sequelize.INTEGER
    },
    complemento:{
      type: Sequelize.STRING
    },
    uf:{
      allowNull: false,
      type: Sequelize.STRING
    },
    url_foto:{
      allowNull: true,
      type: Sequelize.STRING,
      defaultValue: 'http://storage.googleapis.com/miaudote-c4d26.appspot.com/profile%2Fuser.png'
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
