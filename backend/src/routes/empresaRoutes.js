const { Router } = require('express');

const empresaController = require('../app/controllers/EmpresaController');

const router = Router();

router.get('/empresas', empresaController.index);
router.get('/empresas/:id', empresaController.show);

router.post('/empresas', empresaController.store);
router.put('/empresas/:id', empresaController.update);
router.delete('/empresas/:id', empresaController.destroy);

module.exports = router;