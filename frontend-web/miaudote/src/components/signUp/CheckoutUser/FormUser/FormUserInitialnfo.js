import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
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
      <Grid container spacing={3}  justify="flex-end">
        <Paper item xs={6} sm={6} className={classes.inputPaper}>
          <InputField name={nome.name} label={nome.label} fullWidth />
          <InputField name={email.name} label={email.label} fullWidth />
          <InputField name={senha.name} label={senha.label} fullWidth />
          <InputField name={senha_confirm.name} label={senha_confirm.label} fullWidth />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
