import checkoutLoginModel from './checkoutLoginModel';

const {
  formField: {
    email,
    senha,
  }
} = checkoutLoginModel;

export default {
  [email.name]: '',
  [senha.name]: '',
};