import checkoutPetModel from './checkoutPetModel';
const {
  formField: {
    nome,
    especie,
    sexo,
    descricao,
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
  [especie.name]: '',
  [sexo.name]: '',
  [descricao.name]: '',
  [porte.name]: '',
  [latitude.name]: '',
  [longitude.name]: '',
  [cidade.name]: '',
  [raca.name]: '',
  [uf.name]: '',
  id_usuario: 1,
};
