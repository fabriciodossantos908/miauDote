import * as Yup from 'yup';
import moment from 'moment';
import checkoutPetModel from './checkoutPetModel';
const {
  formField: {
    nome,
    especie,
    sexo,
    descricao,
    porte,
    idade,
    anos,
    meses,
    latitude,
    longitude,
    url_foto,
    castrado,
    cidade,
    cep,
    cor,
    cuidados_veterinarios,
    raca,
    uf,
    vacinado,
    vermifungado,
    adocao,
    perdido,
  },
} = checkoutPetModel;

export default [
  Yup.object().shape({
    [nome.name]: Yup.string()
      .min(5, nome.minErrorMsg)
      .max(100, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
    [sexo.name]: Yup.string().required(nome.requiredErrorMsg),
    // [anos.name]: Yup.string().required(nome.requiredErrorMsg),
    // [meses.name]: Yup.string().required(nome.requiredErrorMsg),
  }),
  Yup.object().shape({
    [especie.name]: Yup.string()
      .min(1, nome.minErrorMsg)
      .max(10, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
    [porte.name]: Yup.string().required(nome.requiredErrorMsg),
    [cor.name]: Yup.string()
      .min(1, nome.minErrorMsg)
      .max(30, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
    [raca.name]: Yup.string()
      .min(1, nome.minErrorMsg)
      .max(30, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
  }),
  Yup.object().shape({
    [url_foto.name]: Yup.string().required(nome.requiredErrorMsg),
    [uf.name]: Yup.string().required(nome.requiredErrorMsg),
    [cidade.name]: Yup.string()
      .min(1, nome.minErrorMsg)
      .max(30, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
  }),
];
