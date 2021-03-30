import checkoutUserModel from './checkoutUserModel';

const {
  formField: {
    nome,
    email,
    senha,
    senha_confirm,
    data_nascimento,
    sexo,
    cpf,
    celular,
    cep,
    cidade,
    bairro,
    logradouro,
    numero,
    complemento,
    uf,
    url_foto,
  },
} = checkoutUserModel;

export default {
  [nome.name]: '',
  [email.name]: '',
  [senha.name]: '',
  [senha_confirm.name]: '',
  [data_nascimento.name]: '',
  [sexo.name]: '',
  [cpf.name]: '',
  [celular.name]: '',
  [cep.name]: '',
  [cidade.name]: '',
  [bairro.name]: '',
  [logradouro.name]: '',
  [numero.name]: '',
  [complemento.name]: 'proximo de uma padaria',
  [uf.name]: '',
  [url_foto.name]: 'https://localhost.com/image.jpg',
  permissions: 'USER',
};
