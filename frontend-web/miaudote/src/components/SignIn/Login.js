import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

import { useStyle, login } from '../Layout/styles';
import { InputField } from '../FieldStyle';

import { Link } from 'react-router-dom';

import { Facebook, Email } from '@material-ui/icons';

const OtherLogin = (props) => {
  const classes = props.classesLogin;
  return (
    <React.Fragment>
      <Button startIcon={<Email />} className={classes.btnSocialLogin}>
        Gmail
      </Button>

      <Button startIcon={<Facebook />} className={classes.btnSocialLogin}>
        Facebook
      </Button>
    </React.Fragment>
  );
};

export default function Login(props) {
  const classes = useStyle();
  const classesLogin = login();
  // const [authRequesStatus, setauthRequesStatus] = useState(false)
  const {
    formField: { email, senha },
  } = props;

  // let history = useHistory()

  // function _sleep(ms) {
  //     return new Promise(resolve => setTimeout(resolve, ms));
  // }

  // async function _submitForm(values, actions) {
  //     await _sleep(1000);
  //     // alert(JSON.stringify(values, null, 2));
  //     actions.setSubmitting(false);

  //     Axios.post("http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/autenticar", values)
  //         .then(function (response) {
  //             // setauthRequesStatus(true)
  //             history.push("/", console.log(response))
  //         })
  //         .catch(function (error) {
  //             alert("ops! Usuário e ou senha estão errados")
  //             console.log(error)
  //             // setauthRequesStatus(false)
  //         });
  // }

  // function _handleSubmit(values, actions) {
  //     _submitForm(values, actions);
  // }

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      className={classesLogin.inputPaper}
    >
      <InputField
        name={email.name}
        variant="outlined"
        label={email.label}
        fullWidth
      />
      <InputField
        name={senha.name}
        type="password"
        variant="outlined"
        label={senha.label}
        fullWidth
      />
      <Link to="/making" className={classes.links}>
        Esqueceu sua senha? Clique aqui
      </Link>

      <Grid
        item
        container
        orientation="row"
        justify="center"
        alignContent="space-around"
      >
        <Grid style={{ marginRight: 10 }}>
          <Typography variant="subtitle2">Entrar com:</Typography>
        </Grid>
        <OtherLogin classesLogin={classesLogin} />
      </Grid>
      {/* <Link to="/formCompany" className={classes.links} > */}
    </Grid>
  );
}
