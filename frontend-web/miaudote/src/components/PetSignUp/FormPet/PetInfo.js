import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { InputField } from '../../FieldStyle';

export default function PetInfo(props) {
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
            <Grid 
       container
            xs={10}
            direction="column"
            justify="space-around"
            alignItems="center"
            className={classes.inputPaper}
      >
          <InputField name={nome.name} variant="outlined" label={nome.label} fullWidth />
          <InputField name={especie.name} variant="outlined" label={especie.label} fullWidth />
          <InputField name={idade.name} variant="outlined" label={idade.label} fullWidth />
          <InputField name={porte.name} variant="outlined" label={porte.label} fullWidth />
          <InputField name={sexo.name} variant="outlined" label={sexo.label} fullWidth />
      </Grid>
    </React.Fragment>
  );
}
