const { Router } = require('express');

const authUsuarioController = require('../app/controllers/public/AutenticacaoUsuarioController');
const authEmpresaController = require('../app/controllers/public/AutenticacaoEmpresaController');

const router = Router();

router.post('/usuarios/registrar', authUsuarioController.registra);
router.post('/usuarios/autenticar', authUsuarioController.autentica);

router.post('/empresas/registrar', authEmpresaController.registra);
router.post('/empresas/autenticar', authEmpresaController.autentica);


module.exports = router;