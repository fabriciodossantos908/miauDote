const { Router } = require('express');

const UsuarioController = require('./app/controllers/UsuarioController');
const AutenticacaoController = require('./app/controllers/public/AutenticacaoController');

const routes = Router(); 

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.destroy);

// Autenticação
routes.post('/usuarios/registrar', AutenticacaoController.registra);
routes.post('/usuarios/autenticar', AutenticacaoController.autentica);

module.exports = routes;