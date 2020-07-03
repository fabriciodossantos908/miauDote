import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField } from '../../../FieldStyle';

export default function CompanyBaseInfo(props) {
  const classes = props.useStyle();

  const {
    formField: {
      nome_representante,
      email_representante,
      senha,
      senha_confirm,
      }
  } = props;
  return (
    <React.Fragment>
      <Grid 
       container
            xs={10}
            direction="column"
            justify="space-around"
            alignItems="center"
            className={classes.inputPaper}
      >
          <InputField name={nome_representante.name} variant="outlined" label={nome_representante.label} fullWidth />
          <InputField name={email_representante.name} variant="outlined" label={email_representante.label} fullWidth />
          <InputField name={senha.name} variant="outlined" label={senha.label} fullWidth />
          <InputField name={senha_confirm.name} variant="outlined" label={senha_confirm.label} fullWidth />
      </Grid>
    </React.Fragment>
  );
}
