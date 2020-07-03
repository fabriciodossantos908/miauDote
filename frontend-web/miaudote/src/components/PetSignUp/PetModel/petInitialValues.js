import checkoutPetModel from './checkoutPetModel';
const {
  formField: {
    nome,
    especie,
    sexo,
    descricao,
    descricao_comportamento,
    porte,
    idade,
    latitude,
    longitude,
    url_foto,
    id_usuario,
    castrado,
    cidade,
    cor,
    cuidados_veterinarios,
    raca,
    uf,
    cep,
    vacinado,
    vermifungado
  }
} = checkoutPetModel;

export default {
  [nome.name]: '',
  [especie.name]: '',
  [sexo.name]: '',
  [descricao] : '',
  [descricao_comportamento] : '',
  [porte] : '',
  [idade] : '',
  [latitude] : '',
  [longitude] : '',
  [url_foto] : '',
  [id_usuario] : '',
  [castrado] : '',
  [cidade] : '',
  [cep] : '',
  [cor] : '',
  [cuidados_veterinarios] : '',
  [raca] : '',
  [uf] : '',
  [vacinado] : '',
  [vermifungado] : '',
};