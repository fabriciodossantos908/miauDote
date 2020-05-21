'use strict';

module.exports = {
  up: (queryInterface) =>
    queryInterface.removeColumn('tbl_usuarios', 'username'),

  down: (queryInterface, Sequelize) =>
    queryInterface.addColumn(
      'tbl_usuarios',
      'username',
      {
        type: Sequelize.STRING,
        allowNull: false,
      })
};
