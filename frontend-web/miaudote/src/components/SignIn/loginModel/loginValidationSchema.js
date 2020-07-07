import * as Yup from 'yup';
import checkoutLoginModel from './checkoutLoginModel';
const {
  formField: {
    email,
    senha,
  }
} = checkoutLoginModel;

export default [
  Yup.object().shape({
    [email.name]: Yup
      .string()
      .required(`${email.requiredErrorMsg}`),
    [senha.name]: Yup
      .string()
      .required(`${senha.requiredErrorMsg}`),
  }),
];
