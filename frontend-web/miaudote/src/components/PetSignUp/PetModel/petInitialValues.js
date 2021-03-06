import checkoutPetModel from './checkoutPetModel';
const {
  formField: {
    nome,
    especie,
    raca,
    sexo,
    descricao,
    cor,
    porte,
    idade,
    cuidados_veterinarios,
    vermifungado,
    castrado,
    vacinado,
    uf,
    cidade,
    latitude,
    longitude,
    url_foto,
    id_usuario,
  },
} = checkoutPetModel;

export default {
  [nome.name]: '',
  [especie.name]: '',
  [raca.name]: '',
  [sexo.name]: '',
  [descricao.name]: '',
  [cor.name]: '',
  [porte.name]: '',
  [idade.name]: '',
  [cuidados_veterinarios.name]: false,
  [vermifungado.name]: false,
  [castrado.name]: false,
  [vacinado.name]: false,
  [uf.name]: '',
  [cidade.name]: '',
  [latitude.name]: '',
  [longitude.name]: '',
  [url_foto.name]: 'http://miau.com/foto.jpg',
  id_usuario: '',
};
