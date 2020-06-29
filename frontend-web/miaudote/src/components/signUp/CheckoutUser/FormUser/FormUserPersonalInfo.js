import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';

export default function FormUserPersonalInfo(props) {
  const classes = props.useStyle()
  const {
    formField: {
      celular,
      sexo,
      dt_nasc,
      url_foto
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} justify="flex-end">
        <Container item xs={6} sm={6} className={classes.inputPaper}>
            <InputField name={celular.name} label={celular.label} fullWidth />
            <InputField name={dt_nasc.name} label={dt_nasc.label} fullWidth />
            <InputField name={sexo.name} label={sexo.label} fullWidth />
            <Typography>
              The photo upload come here
              </Typography>
        </Container>
      </Grid>
    </React.Fragment>
  );
}