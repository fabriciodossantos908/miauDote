const { Router } = require('express');

// Modulos para o upload de arquivo
const Multer = require('multer');
const path = require('path');
const md5 = require('md5');

// Configuração do multer
const storage = Multer.diskStorage({
   destination: (req, file, cb)=> {
      cb(null, './src/app/tmp');
   },
   filename: (req, file, cb)=>{
      cb(null, `${md5(file.originalname)}-${Date.now()}${path.extname(file.originalname)}`);
   }
});
const upload = Multer({ storage });


const usuarioController = require('../app/controllers/UsuarioController');
const empresaController = require('../app/controllers/EmpresaController');
const tipoServicoController = require('../app/controllers/TipoServicoController');
const petController = require('../app/controllers/PetController');
const petPerdidoController = require('../app/controllers/PetPerdidoController');

const usuarioFilter = require('../app/controllers/filters/UsuarioFilter');
const empresaFilter = require('../app/controllers/filters/EmpresaFilter');
const petFilter = require('../app/controllers/filters/PetFilter');

const router = Router();

// Rotas de Usuário
router.get('/usuarios', usuarioController.index);
router.get('/usuarios/:id', usuarioController.show);
router.get('/usuarios/email/:email', usuarioFilter.showByEmail);
router.get('/usuarios/cpf/:cpf', usuarioFilter.showByCpf);
router.get('/usuarios/nome/:nome', usuarioFilter.showByNome);
router.get('/usuarios/confirmar/:email', usuarioFilter.confirmarEmail);
router.get('/usuarios/redefinir_senha/:email', usuarioFilter.forgotPassword);
router.put('/usuarios/upload/foto/:id', upload.single('file'), usuarioFilter.uploadProfilePhoto);


// Rotas de Empresa
router.get('/empresas', empresaController.index);
router.get('/empresas/:id', empresaController.show);
router.get('/empresas/cnpj/:cnpj', empresaFilter.indexByCnpj);
router.get('/empresas/nome/:nome', empresaFilter.indexByNome);
router.put('/empresas/upload/logo/:id', upload.single('file'), empresaFilter.uploadCompanyPhoto);


// Rotas de Tipos de Serviços
router.get('/servicos', tipoServicoController.index);
router.post('/servicos', tipoServicoController.store);
router.put('/servicos/:id', tipoServicoController.update);
router.delete('/servicos/:id', tipoServicoController.destroy);

// Rotas de Pets
router.get('/pets', petController.index);
router.get('/pets/:id', petController.show);
router.get('/pets/uf/:uf', petFilter.indexBylocal);
router.get('/pets/localizacao/latitude/:latitude/longitude/:longitude', petFilter.indexByProximity);

// Rotas de Pets perdidos
router.get('/pets_perdidos', petPerdidoController.index);



module.exports = router;
