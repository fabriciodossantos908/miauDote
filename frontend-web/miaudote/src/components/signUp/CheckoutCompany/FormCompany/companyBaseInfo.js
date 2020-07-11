import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Grid, Typography, Paper, Container } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';
=======
import { Grid } from '@material-ui/core';
import { InputField } from '../../../FieldStyle';
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
import { Grid } from '@material-ui/core';
import { InputField } from '../../../FieldStyle';
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500

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
<<<<<<< HEAD
<<<<<<< HEAD
      <Grid container spacing={3} justify="flex-end">
        <Container item xs={6} sm={6} className={classes.inputPaper}>
          <InputField name={nome_representante.name} label={nome_representante.label} fullWidth />
          <InputField name={email_representante.name} label={email_representante.label} fullWidth />
          <InputField name={senha.name} label={senha.label} fullWidth />
          <InputField name={senha_confirm.name} label={senha_confirm.label} fullWidth />
        </Container>
=======
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      <Grid 
       container
            direction="column"
            justify="space-around"
            alignItems="center"
            className={classes.inputPaper}
      >
          <InputField name={nome_representante.name} variant="outlined" label={nome_representante.label} fullWidth />
          <InputField name={email_representante.name} variant="outlined" label={email_representante.label} fullWidth />
          <InputField name={senha.name} variant="outlined" label={senha.label} fullWidth />
          <InputField name={senha_confirm.name} variant="outlined" label={senha_confirm.label} fullWidth />
<<<<<<< HEAD
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      </Grid>
    </React.Fragment>
  );
}
