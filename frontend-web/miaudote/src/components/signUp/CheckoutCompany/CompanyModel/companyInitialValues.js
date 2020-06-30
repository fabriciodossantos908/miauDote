import checkoutCompanyModel from './checkoutCompanyModel';
const {
  formField: {
    nome_representante,
    email_representante,
    senha,
    senha_confirm,
    celular_representante,
    razao_social,
    nome_empresa,
    cnpj,
    telefone,
    cep,
    cidade,
    bairro,
    logradouro,
    numero,
    complemento,
    uf,
    id_tipo_servico,
    url_logo,
  }
} = checkoutCompanyModel;

export default {
  [nome_representante.name]: '',
  [email_representante.name]: '',
  [senha.name]: '',
  [senha_confirm.name]: '',
  [celular_representante] : '',
  [razao_social] : '',
  [nome_empresa] : '',
  [cnpj] : '',
  [telefone] : '',
  [cep] : '',
  [cidade] : '',
  [bairro] : '',
  [logradouro] : '',
  [numero] : '',
  [complemento] : '',
  [uf] : '',
  [id_tipo_servico] : '',
  [url_logo] : 'url/teste/sem/imagem.png',
  
};