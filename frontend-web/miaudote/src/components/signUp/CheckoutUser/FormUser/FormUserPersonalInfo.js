import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField } from '../../../FieldStyle';

export default function FormUserPersonalInfo(props) {
  const classes = props.useStyle()
  const {
    formField: {
      celular,
      sexo,
      dt_nasc,
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
        <InputField name={celular.name} variant="outlined" label={celular.label} fullWidth />
        <InputField name={dt_nasc.name} variant="outlined" label={dt_nasc.label} fullWidth />
        <InputField name={sexo.name} variant="outlined" label={sexo.label} fullWidth />
      </Grid>
    </React.Fragment>
  );
}