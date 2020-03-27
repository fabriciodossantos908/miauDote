'use strict';

module.exports = {
  up: (queryInterface) =>
    queryInterface.renameColumn('tbl_usuarios', 'role', 'permissions'),

  down: (queryInterface) =>
    queryInterface.renameColumn('tbl_usuarios', 'permissions', 'role')

};
