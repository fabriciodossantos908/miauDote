import * as Yup from 'yup';
import moment from 'moment';
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

export default [
  Yup.object().shape({
    [nome_empresa.name]: Yup.string().required(`${nome_empresa.requiredErrorMsg}`),
    [email_representante.name]: Yup.string().required(`${email_representante.requiredErrorMsg}`),
    [senha.name]: Yup.string().required(`${senha.requiredErrorMsg}`),
    [senha_confirm.name]: Yup.string().required(`${senha_confirm.requiredErrorMsg}`),
  }),
  Yup.object().shape({
  })
];
