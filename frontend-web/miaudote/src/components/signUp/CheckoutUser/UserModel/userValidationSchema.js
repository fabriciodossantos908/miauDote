import * as Yup from 'yup';
<<<<<<< HEAD
<<<<<<< HEAD
import moment from 'moment';
=======
// import moment from 'moment';
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
// import moment from 'moment';
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
import checkoutUserModel from './checkoutUserModel';
const {
  formField: {
    nome,
<<<<<<< HEAD
<<<<<<< HEAD
    email,
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
<<<<<<< HEAD
    [email.name]: Yup.string().required(`${email .requiredErrorMsg}`),
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    [senha.name]: Yup.string().required(`${senha.requiredErrorMsg}`),
    [senha_confirm.name]: Yup.string().required(`${senha_confirm.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [celular.name]: Yup.string().required(`${celular.requiredErrorMsg}`),
    [sexo.name]: Yup.string().required(`${sexo.requiredErrorMsg}`),
    [dt_nasc.name]: Yup.string().required(`${dt_nasc.requiredErrorMsg}`),
  }),

];
