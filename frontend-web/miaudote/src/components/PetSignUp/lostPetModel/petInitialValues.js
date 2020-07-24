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
    id_usuario,
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
  [latitude.name]: '-23.548840',
  [longitude.name]: '-46.898081',
  [data.name]: '',
  [hora.name]: '',
  [descricao.name]: '',
  id_usuario: '',
};
