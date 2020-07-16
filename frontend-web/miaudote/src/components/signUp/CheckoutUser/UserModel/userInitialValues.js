import checkoutUserModel from './checkoutUserModel';
const {
  formField: {
    nome,
    email,
    senha,
    senha_confirm,
    celular,
    sexo,
    dt_nasc,    
    cep,
    cidade,
    bairro,
    logradouro,
    numero,
    complemento,
    uf,
    url_foto
  }
} = checkoutUserModel;

export default {
  [nome.name]: '',
  [email.name]: '',
  [senha.name]: '',
  [senha_confirm.name]: '',
  [celular.name] : '',
  [sexo.name]: '',
  [dt_nasc.name]: '',
  [cep.name] : '',
  [cidade.name] : '',
  [bairro.name] : '',
  [logradouro.name] : '',
  [numero.name] : '',
  [complemento.name] : '',
  [uf.name] : '',
  // [url_foto.name] : ''
};