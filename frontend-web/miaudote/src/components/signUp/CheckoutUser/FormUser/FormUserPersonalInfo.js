import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField, SelectField } from '../../../FieldStyle';

const data = [
  {
    value: undefined,
    label: 'Selecione'
  },
  {
    value: "F",
    label: "Femino"
  },
  {
    value: "M",
    label: "Masculino"
  },
  {
    value: "H",
    label: "Homossexual"
  },
  {
    value: "T",
    label: "Transexual"
  },
]


export default function FormUserPersonalInfo(props) {
  const classes = props.useStyle()
  const {
    formField: {
      celular,
      sexo,
      dt_nasc,
      cpf,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.inputPaper}>
        <InputField name={celular.name} variant="outlined" label={celular.label} fullWidth />
      </Grid>
      <Grid item className={classes.inputPaper}>

        <InputField name={dt_nasc.name} variant="outlined" label={dt_nasc.label} fullWidth />
      </Grid>
      <Grid item className={classes.inputPaper}>

        <InputField name={cpf.name} variant="outlined" label={cpf.label} fullWidth />
      </Grid>
      <Grid item className={classes.inputPaper}>

        <SelectField name={sexo.name} data={data} label={sexo.label} fullWidth />
      </Grid>
    </React.Fragment>
  );
}