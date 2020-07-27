import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { palette } from '../../../Layout/theme';

function ConfirmEmail(props) {
  const history = useHistory();
  var email = localStorage.getItem('email');

  let hide = email.split('@')[0].length - 2;

  var r = new RegExp('.{' + hide + '}@', 'g');

  email = email.replace(r, '***@');

  const handleLogin = () => {
    history.go(0);
  };
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={5}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={{
              color: palette.secondary.main,
            }}
            gutterBottom
          >
            Confirmação de email
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="subtitle1"
            style={{ marginBottom: 50 }}
            align="center"
          >
            Estamos quase lá! só precisamos conferir seu email.
          </Typography>
          <Typography variant="subtitle1" align="center">
            Uma mensagem será enviada á {email} com o link para confirmação.
            Obrigado por se tornar parte dos Pet Lovers!
          </Typography>
        </Grid>
        <Grid>
          <Button variant="outlined" onClick={handleLogin}>
            Voltar ao login
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ConfirmEmail;
