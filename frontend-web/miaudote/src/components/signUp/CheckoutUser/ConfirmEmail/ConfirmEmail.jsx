import React from 'react';
import { Typography, Grid } from '@material-ui/core';

function ConfirmEmail() {
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
          <Typography variant="h5" gutterBottom>
            Confirmação de email
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1">
            Estamos quase lá! só precisamos conferir seu email Uma mensagem será
            enviada á j......@gmail.com com o link para confirmação. Obrigado
            por se tornar parte dos Pet Lovers!
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ConfirmEmail;
