import * as Yup from 'yup';
// import moment from 'moment';
import checkoutUserModel from './checkoutUserModel';
const {
  formField: {
    nome,
    email,
    senha,
    senha_confirm,
    celular,
    dt_nasc,
    cpf,
    sexo,
    cep,
    logradouro,
    cidade,
    bairro,
    complemento,
    numero,
    uf,
  },
} = checkoutUserModel;

export default [
  Yup.object().shape({
    [nome.name]: Yup.string()
      .min(5, `${nome.minErrorMsg}`)
      .max(100, `${nome.maxErrorMsg}`)
      .required(`${nome.requiredErrorMsg}`),
    [email.name]: Yup.string()
      .email(email.emailErrorMsg)
      .required(`${email.requiredErrorMsg}`),
    [senha.name]: Yup.string()
      .min(8, `${senha.minErrorMsg}`)
      .max(30, `${senha.maxErrorMsg}`)
      .required(`${senha.requiredErrorMsg}`),
    [senha_confirm.name]: Yup.string()
      .test('passwords-match', `${senha_confirm.matchErrorMsg}`, function (
        value,
      ) {
        return this.parent.senha === value;
      })
      .required(`${senha_confirm.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [celular.name]: Yup.string().required(`${celular.requiredErrorMsg}`),
    [dt_nasc.name]: Yup.string().required(`${dt_nasc.requiredErrorMsg}`),
    [cpf.name]: Yup.string()
      .required(`${cpf.requiredErrorMsg}`)
      .length(11, `${cpf.lengthErrorMsg}`),
    [sexo.name]: Yup.string().required(`${sexo.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [cep.name]: Yup.string()
      .length(8, cep.lengthErrorMsg)
      .required(`${cep.requiredErrorMsg}`),
    [logradouro.name]: Yup.string()
      .min(3, `${logradouro.minErrorMsg}`)
      .max(100, `${logradouro.maxErrorMsg}`)
      .required(`${logradouro.requiredErrorMsg}`),
    [cidade.name]: Yup.string()
      .min(2, `${cidade.minErrorMsg}`)
      .max(100, `${cidade.maxErrorMsg}`)
      .required(`${cidade.requiredErrorMsg}`),
    [bairro.name]: Yup.string()
      .min(2, `${bairro.minErrorMsg}`)
      .max(100, `${bairro.maxErrorMsg}`)
      .required(`${bairro.requiredErrorMsg}`),
    [numero.name]: Yup.string()
      .min(1, `${numero.minErrorMsg}`)
      .max(6, `${numero.maxErrorMsg}`)
      .required(`${numero.requiredErrorMsg}`),
    [uf.name]: Yup.string().required(`${uf.requiredErrorMsg}`),
  }),
];
