import * as Yup from 'yup';
// import moment from 'moment';
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
  }
} = checkoutCompanyModel;

export default [
  Yup.object().shape({
    [nome_representante.name]: Yup
      .string()
      .required(`${nome_empresa.requiredErrorMsg}`),
    [email_representante.name]: Yup
      .string()
      .required(`${email_representante.requiredErrorMsg}`),
    [senha.name]: Yup
      .string()
      .required(`${senha.requiredErrorMsg}`),
    [senha_confirm.name]: Yup
      .string()
      .required(`${senha_confirm.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [celular_representante.name]: Yup
      .string()
      .required(`${celular_representante.requiredErrorMsg}`),
    [razao_social.name]: Yup
      .string()
      .required(`${razao_social.requiredErrorMsg}`),
    [nome_empresa.name]: Yup
      .string()
      .required(`${nome_empresa.requiredErrorMsg}`),
    [cnpj.name]: Yup
      .string()
      .required(`${cnpj.requiredErrorMsg}`),
    [telefone.name]: Yup
      .string()
      .required(`${telefone.requiredErrorMsg}`),
    [id_tipo_servico.name]: Yup
      .string()
      .required(`${id_tipo_servico.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [cep.name]: Yup
      .string()
      .required(`${cep.requiredErrorMsg}`),
    [cidade.name]: Yup
      .string()
      .required(`${cidade.requiredErrorMsg}`),
    [bairro.name]: Yup
      .string()
      .required(`${logradouro.requiredErrorMsg}`),
    [numero.name]: Yup
      .string()
      .required(`${numero.requiredErrorMsg}`),
    [complemento.name]: Yup
      .string()
      .required(`${complemento.requiredErrorMsg}`),
    [uf.name]: Yup
      .string()
      .required(`${uf.requiredErrorMsg}`),
  }),
];
