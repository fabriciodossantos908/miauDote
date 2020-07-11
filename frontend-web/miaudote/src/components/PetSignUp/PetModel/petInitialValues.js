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
  [descricao.name] : '',
  [porte.name] : '',
  [idade.name] : '',
  [latitude.name] : '',
  [longitude.name] : '',
  [url_foto.name] : '',
  [castrado.name] : '',
  [cidade.name] : '',
  [cep.name] : '',
  [cor.name] : '',
  [cuidados_veterinarios.name] : '',
  [raca.name] : '',
  [uf.name] : '',
  [vacinado.name] : '',
  [vermifungado.name] : '',
};