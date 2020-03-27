const { Router } = require('express');

const usuarioController = require('../app/controllers/UsuarioController');
const empresaController = require('../app/controllers/EmpresaController');

const router = Router(); 

// Rotas de Usuário
router.get('/usuarios', usuarioController.index);
router.get('/usuarios/:id', usuarioController.show);
 

// Rotas de Empresa
router.get('/empresas', empresaController.index);
router.get('/empresas/:id', empresaController.show);



module.exports = router;
