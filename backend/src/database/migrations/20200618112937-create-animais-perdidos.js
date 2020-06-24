'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_pets_perdidos', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      nome:{
        allowNull: false,
        type: Sequelize.STRING
      },
      especie:{
        allowNull: false,
        type: Sequelize.STRING
      },
      raca:{
        allowNull: false,
        type: Sequelize.STRING
      },
      sexo:{
        allowNull: false,
        type: Sequelize.STRING
      },
      porte:{
        allowNull: false,
        type: Sequelize.STRING
      },
      uf:{
        allowNull: false,
        type: Sequelize.STRING
      },
      cidade:{
        allowNull: false,
        type: Sequelize.STRING
      },
      url_fotos:{
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'http://storage.googleapis.com/miaudote-c4d26.appspot.com/app%2F157498944d5b6085da218e31e37ae123-1592484152229.png'
      },
      latitude:{
        allowNull: false,
        type: Sequelize.STRING
      },
      longitude:{
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao:{
        allowNull: false,
        type: Sequelize.STRING
      },
      encontrado:{
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_usuarios',
          key: 'id'
        }
      }
    })
  },

  down: queryInterface => 
    queryInterface.dropTable('tbl_pets_perdidos'),
};
