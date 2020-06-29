import React from 'react';
import { Typography } from '@material-ui/core';

function ConfirmEmail() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Confirmação de email
      </Typography>
      <Typography variant="subtitle1">
      Estamos quase lá! só precisamos conferir seu email
      Uma mensagem será enviada á j......@gmail.com com o link para confirmação.
      Obrigado por se tornar parte dos Pet Lovers!
      </Typography>
    </React.Fragment>
  );
}

export default ConfirmEmail;
