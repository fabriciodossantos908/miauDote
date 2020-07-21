import * as Yup from 'yup';
import checkoutLoginModel from './checkoutLoginModel';
const {
  formField: { email, senha },
} = checkoutLoginModel;

export default [
  Yup.object().shape({
    [email.name]: Yup.string()
      .email(email.emailErrorMsg)
      .required(`${email.requiredErrorMsg}`),
    [senha.name]: Yup.string()
      .min(8, `${senha.minErrorMsg}`)
      .max(30, `${senha.maxErrorMsg}`)
      .required(`${senha.requiredErrorMsg}`),
  }),
];
