import checkoutPetModel from './checkoutPetModel';
const {
  formField: {
    nome,
    descricao,
    especie,
    sexo,
    porte,
    latitude,
    longitude,
    cidade,
    raca,
    uf,
  },
} = checkoutPetModel;

export default {
  [nome.name]: '',
  [descricao.name]: '',
  [especie.name]: '',
  [sexo.name]: '',
  [porte.name]: '',
  [latitude.name]: '',
  [longitude.name]: '',
  [cidade.name]: '',
  [raca.name]: '',
  [uf.name]: '',
  id_usuario: 1,
};
