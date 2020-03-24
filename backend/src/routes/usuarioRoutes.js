const { Router } = require('express');

const UsuarioController = require('../app/controllers/UsuarioController');

const router = Router(); 

router.get('/usuarios', UsuarioController.index);
router.get('/usuarios/:id', UsuarioController.show);
router.put('/usuarios/:id', UsuarioController.update);
router.delete('/usuarios/:id', UsuarioController.destroy);

module.exports = router;