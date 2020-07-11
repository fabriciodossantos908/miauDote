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
<<<<<<< HEAD
    raca:{
=======
    raca: {
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      allowNull: false,
      type: Sequelize.STRING
    },
    sexo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
<<<<<<< HEAD
    situacao: {
      allowNull: false,
      type: Sequelize.STRING
    },
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    descricao: {
      allowNull: false,
      type: Sequelize.STRING,
    },
<<<<<<< HEAD
    descricao_comportamento: {
=======
    cor: {
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
    uf: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cidade: {
      type: Sequelize.STRING,
      allowNull: false
=======
    cuidados_veterinarios: {
      allowNull: true,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    vermifugado: {
      allowNull: true,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    vacinado: {
      allowNull: true,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    castrado: {
      allowNull: true,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    uf:{
      allowNull: false,
      type: Sequelize.STRING
    },
    cidade:{
      allowNull: false,
      type: Sequelize.STRING
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
      allowNull: false,
      type: Sequelize.STRING
    },
=======
      allowNull: true,
      type: Sequelize.STRING
    },
    visualizacoes:{
      allowNull: true,
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
