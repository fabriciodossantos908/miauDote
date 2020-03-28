'use strict';

module.exports = {
  up: (queryInterface) =>
    queryInterface.removeColumn('tbl_usuarios', 'created_at'),

  down: (queryInterface, Sequelize) =>
    queryInterface.addColumn(
      'tbl_usuarios',
      'created_at',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: new Date()
      })
};
