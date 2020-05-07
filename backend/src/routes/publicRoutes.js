const { Router } = require('express');

const usuarioController = require('../app/controllers/UsuarioController');
const empresaController = require('../app/controllers/EmpresaController');
const tipoServicoController = require('../app/controllers/TipoServicoController');
const petController = require('../app/controllers/PetController');

const router = Router();

// Rotas de Usuário
router.get('/usuarios', usuarioController.index);
router.get('/usuarios/:id', usuarioController.show);
router.get('/usuarios/email/:email', usuarioController.showByEmail);
router.get('/usuarios/cpf/:cpf', usuarioController.showByCpf);
router.get('/usuarios/nome/:nome', usuarioController.showByNome);


// Rotas de Empresa
router.get('/empresas', empresaController.index);
router.get('/empresas/:id', empresaController.show);
router.get('/empresas/cnpj/:cnpj', empresaController.showByCnpj);
router.get('/empresas/nome/:nome', empresaController.showByNome);


// Rotas de Tipos de Serviços
router.get('/servicos', tipoServicoController.index);
router.post('/servicos', tipoServicoController.store);
router.put('/servicos/:id', tipoServicoController.update);
router.delete('/servicos/:id', tipoServicoController.destroy);

// Rotas de Pets
router.get('/pets', petController.showByProximity);
router.post('/pets', petController.store);
router.put('/pets/:id', petController.update);
router.delete('/pets/:id', petController.destroy);


module.exports = router;
