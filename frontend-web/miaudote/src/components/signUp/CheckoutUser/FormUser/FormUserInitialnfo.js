import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Grid, Typography, Container } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';
=======
import { Grid } from '@material-ui/core';
import { InputField } from '../../../FieldStyle';
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
import { Grid } from '@material-ui/core';
import { InputField } from '../../../FieldStyle';
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500

export default function FormUserInitialInfo(props) {
  const classes = props.useStyle();

  const {
    formField: {
      nome,
      email,
      senha,
      senha_confirm,
<<<<<<< HEAD
<<<<<<< HEAD
      }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}  justify="flex-end">
        <Container item xs={6} sm={6} className={classes.inputPaper}>
          <InputField name={nome.name} label={nome.label} fullWidth />
          <InputField name={email.name} label={email.label} fullWidth />
          <InputField name={senha.name} label={senha.label} fullWidth />
          <InputField name={senha_confirm.name} label={senha_confirm.label} fullWidth />
        </Container>
=======
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      </Grid>
    </React.Fragment>
  );
}
