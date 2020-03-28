const { Router } = require('express');

const usuarioController = require('../app/controllers/UsuarioController');
const empresaController = require('../app/controllers/EmpresaController');
const tipoServico = require('../app/controllers/TipoServicoController');

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
router.get('/servicos', tipoServico.index);
router.post('/servicos', tipoServico.store);
router.put('/servicos/:id', tipoServico.update);
router.delete('/servicos/:id', tipoServico.destroy);


module.exports = router;
