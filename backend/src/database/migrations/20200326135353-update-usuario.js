'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'tbl_usuarios',
    'role',
    {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'USER'
    }
  ),

  down: (queryInterface) => queryInterface.removeColumn('tbl_usuarios', 'role')
};
