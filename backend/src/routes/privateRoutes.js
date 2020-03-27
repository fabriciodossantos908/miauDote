const { Router } = require('express');
const guard = require('express-jwt-permissions')();

const usuarioController = require('../app/controllers/UsuarioController');
const empresaController = require('../app/controllers/EmpresaController');

const router = Router(); 

// Rotas de Usuário
router.put('/usuarios/:id', guard.check('USER'), usuarioController.update);
router.delete('/usuarios/:id', guard.check('USER'), usuarioController.destroy);


// Rotas de Empresa
router.put('/empresas/:id',guard.check('COMPANY'), empresaController.update);
router.delete('/empresas/:id', guard.check('COMPANY'), empresaController.destroy);



module.exports = router;
