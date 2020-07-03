import * as Yup from 'yup';
// import moment from 'moment';
import checkoutUserModel from './checkoutUserModel';
const {
  formField: {
    nome,
    senha,
    senha_confirm,
    celular,
    sexo,
    dt_nasc,
  }
} = checkoutUserModel;

export default [
  Yup.object().shape({
    [nome.name]: Yup.string().required(`${nome.requiredErrorMsg}`),
    [senha.name]: Yup.string().required(`${senha.requiredErrorMsg}`),
    [senha_confirm.name]: Yup.string().required(`${senha_confirm.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [celular.name]: Yup.string().required(`${celular.requiredErrorMsg}`),
    [sexo.name]: Yup.string().required(`${sexo.requiredErrorMsg}`),
    [dt_nasc.name]: Yup.string().required(`${dt_nasc.requiredErrorMsg}`),
  }),

];
