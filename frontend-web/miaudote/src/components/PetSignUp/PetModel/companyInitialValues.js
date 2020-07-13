import checkoutCompanyModel from './checkoutCompanyModel';
const {
  formField: {
    nome,
    especie,
    sexo,
    situacao,
    descricao,
    descricao_comportamento,
    porte,
    idade,
    latitude,
    longitude,
    url_foto,
    id_usuario,
  }
} = checkoutCompanyModel;

export default {
  [nome.name]: '',
  [especie.name]: '',
  [sexo.name]: '',
  [situacao.name]: '',
  [descricao] : '',
  [descricao_comportamento] : '',
  [porte] : '',
  [idade] : '',
  [latitude] : '',
  [longitude] : '',
  [url_foto] : '',
  [id_usuario] : '',  
};