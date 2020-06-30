import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';

export default function FormUserInitialInfo(props) {
  const classes = props.useStyle();

  const {
    formField: {
      nome,
      email,
      senha,
      senha_confirm,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container
              xs={10}
              direction="column"
              justify="space-around"
              alignItems="center"
              className={classes.inputPaper}
              >
            <InputField name={nome.name} variant="outlined" label={nome.label} justify="flex-start" fullWidth />
            <InputField name={email.name} variant="outlined" label={email.label} fullWidth />
            <InputField name={senha.name} variant="outlined" label={senha.label} justify="flex-start" fullWidth />
            <InputField name={senha_confirm.name} variant="outlined" label={senha_confirm.label} justify="flex-start" fullWidth />
      </Grid>
    </React.Fragment>
  );
}
