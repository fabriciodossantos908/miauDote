import React from 'react';
<<<<<<< HEAD
import { Grid, Typography, Container } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';
=======
import { Grid } from '@material-ui/core';
import { InputField } from '../../../FieldStyle';
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500

export default function FormUserPersonalInfo(props) {
  const classes = props.useStyle()
  const {
    formField: {
      celular,
      sexo,
      dt_nasc,
<<<<<<< HEAD
      url_foto
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    }
  } = props;
  return (
    <React.Fragment>
<<<<<<< HEAD
      <Grid container spacing={3} justify="flex-end">
        <Container item xs={6} sm={6} className={classes.inputPaper}>
            <InputField name={celular.name} label={celular.label} fullWidth />
            <InputField name={dt_nasc.name} label={dt_nasc.label} fullWidth />
            <InputField name={sexo.name} label={sexo.label} fullWidth />
            <Typography>
              The photo upload come here
              </Typography>
        </Container>
=======
      <Grid container
        xs={10}
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.inputPaper}
      >
        <InputField name={celular.name} variant="outlined" label={celular.label} fullWidth />
        <InputField name={dt_nasc.name} variant="outlined" label={dt_nasc.label} fullWidth />
        <InputField name={sexo.name} variant="outlined" label={sexo.label} fullWidth />
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      </Grid>
    </React.Fragment>
  );
}