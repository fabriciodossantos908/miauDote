const { Router } = require('express');
const guard = require('express-jwt-permissions')();

const usuarioController = require('../app/controllers/UsuarioController');
const empresaController = require('../app/controllers/EmpresaController');
const petController = require('../app/controllers/PetController');
const petPerdidoController = require('../app/controllers/PetPerdidoController');

const router = Router(); 

// Rotas de Usuário
router.put('/usuarios/:id', guard.check('USER'), usuarioController.update);
router.delete('/usuarios/:id', guard.check('USER'), usuarioController.destroy);


// Rotas de Empresa
router.put('/empresas/:id',guard.check('COMPANY'), empresaController.update);
router.delete('/empresas/:id', guard.check('COMPANY'), empresaController.destroy);

// Rotas de Pets
router.post('/pets', guard.check('USER'), petController.store);
router.put('/pets/:id', guard.check('USER'), petController.update);
router.delete('/pets/:id', guard.check('USER'), petController.destroy);

// Rotas de Pets perdidos

router.post('/pets_perdidos', petPerdidoController.store);
router.put('/pets_perdidos/:id', guard.check('USER'), petPerdidoController.update);
router.delete('/pets_perdidos/:id', guard.check('USER'), petPerdidoController.destroy);


module.exports = router;
