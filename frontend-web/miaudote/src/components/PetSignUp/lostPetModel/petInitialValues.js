import checkoutPetModel from './checkoutPetModel';

const {
  formField: {
    nome,
    especie,
    raca,
    sexo,
    porte,
    uf,
    cidade,
    bairro,
    latitude,
    longitude,
    data,
    hora,
    descricao,
    // id_usuario,
  },
} = checkoutPetModel;

export default {
  [nome.name]: '',
  [especie.name]: '',
  [raca.name]: '',
  [sexo.name]: '',
  [porte.name]: '',
  [uf.name]: '',
  [cidade.name]: '',
  [bairro.name]: '',
  [latitude.name]: '',
  [longitude.name]: '',
  [data.name]: '',
  [hora.name]: '',
  [descricao.name]: '',
  id_usuario: '',
};
