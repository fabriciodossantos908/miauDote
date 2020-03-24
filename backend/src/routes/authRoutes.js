const { Router } = require('express');

const authController = require('../app/controllers/public/AutenticacaoController');

const router = Router();

router.post('/registrar', authController.registra);
router.post('/autenticar', authController.autentica);

module.exports = router;