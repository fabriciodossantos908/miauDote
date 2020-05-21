'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
      'tbl_usuarios',
      'email_confirmado',
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      })
  },
  down: (queryInterface) => 
    queryInterface.removeColumn('tbl_usuarios', 'email_confirmado')
};
