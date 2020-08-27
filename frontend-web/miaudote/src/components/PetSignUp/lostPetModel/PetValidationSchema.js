import * as Yup from 'yup';
import checkoutPetModel from './checkoutPetModel';
const {
  formField: {
    nome,
    descricao,
    especie,
    sexo,
    porte,
    cidade,
    raca,
    uf,
    bairro,
    data,
    hora,
  },
} = checkoutPetModel;

export default [
  Yup.object().shape({
    [uf.name]: Yup.string().required(nome.requiredErrorMsg),
    [cidade.name]: Yup.string()
      .min(1, nome.minErrorMsg)
      .max(30, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
    [bairro.name]: Yup.string()
      .min(5, nome.minErrorMsg)
      .max(30, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
    [data.name]: Yup.string()
      .length(10, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
    [hora.name]: Yup.string()
      .length(5, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
  }),
  Yup.object().shape({
    [nome.name]: Yup.string()
      .min(5, nome.minErrorMsg)
      .max(100, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
    [descricao.name]: Yup.string()
      .max(100, descricao.maxErrorMsg)
      .required(descricao.requiredErrorMsg),
  }),
  Yup.object().shape({
    [sexo.name]: Yup.string().required(nome.requiredErrorMsg),
    [porte.name]: Yup.string().required(nome.requiredErrorMsg),
    [raca.name]: Yup.string()
      .min(1, nome.minErrorMsg)
      .max(30, nome.maxErrorMsg)
      .required(nome.requiredErrorMsg),
    [especie.name]: Yup.string().required(nome.requiredErrorMsg),
  }),
];
