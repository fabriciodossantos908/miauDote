import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { InputField } from '../../FieldStyle';

export default function CompanyBaseInfo(props) {
  const classes = props.useStyle();

  const {
    formField: {
      nome,
      especie,
      idade,
      porte,
      sexo,
      }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} justify="flex-end">
        <Container item xs={6} sm={6} className={classes.inputPaper}>
          <InputField name={nome.name} label={nome.label} fullWidth />
          <InputField name={especie.name} label={especie.label} fullWidth />
          <InputField name={idade.name} label={idade.label} fullWidth />
          <InputField name={porte.name} label={porte.label} fullWidth />
          <InputField name={sexo.name} label={sexo.label} fullWidth />
        </Container>
      </Grid>
    </React.Fragment>
  );
}
