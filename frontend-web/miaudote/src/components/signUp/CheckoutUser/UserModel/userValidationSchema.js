import * as Yup from 'yup';
import moment from 'moment';
import checkoutUserModel from './checkoutUserModel';
const {
  formField: {
    nome,
    email ,
    senha,
    senha_confirm,
    celular,
    telefone,
    sexo,
    dt_nasc,
    cep,
    cidade,
    bairro,
    logradouro,
    numero,
    complemento,
    uf,
    url_foto,
  }
} = checkoutUserModel;

export default [
  Yup.object().shape({
    [nome.name]: Yup.string().required(`${nome.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email .requiredErrorMsg}`),
    [senha.name]: Yup.string().required(`${senha.requiredErrorMsg}`),
    [senha_confirm.name]: Yup.string().required(`${senha_confirm.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [celular.name]: Yup.string().required(`${celular.requiredErrorMsg}`),
    [telefone.name]: Yup.string().required(`${telefone.requiredErrorMsg}`),
    [sexo.name]: Yup.string().required(`${sexo.requiredErrorMsg}`),
    [dt_nasc.name]: Yup.string().required(`${dt_nasc.requiredErrorMsg}`),
  }),

];
