'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'tbl_empresas',
    'permissions',
    {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'COMPANY'
    }
  ),

  down: (queryInterface) => queryInterface.removeColumn('tbl_empresas', 'permissions')
};
