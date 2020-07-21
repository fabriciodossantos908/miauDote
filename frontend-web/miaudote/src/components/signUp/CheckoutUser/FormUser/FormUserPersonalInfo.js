import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField, SelectField } from '../../../FieldStyle';

const data = [
  {
    value: undefined,
    label: 'Selecione',
  },
  {
    value: 'F',
    label: 'Femino',
  },
  {
    value: 'M',
    label: 'Masculino',
  },
  {
    value: 'O',
    label: 'Outros',
  },
  {
    value: 'N',
    label: 'Não informar',
  },
];

export default function FormUserPersonalInfo(props) {
  const classes = props.useStyle();
  const {
    formField: { celular, sexo, data_nascimento, cpf },
  } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.inputPaper}>
        <InputField
          name={celular.name}
          variant="outlined"
          label={celular.label}
          fullWidth
        />
      </Grid>
      <Grid item className={classes.inputPaper}>
        <InputField
          name={data_nascimento.name}
          variant="outlined"
          label={data_nascimento.label}
          fullWidth
        />
      </Grid>
      <Grid item className={classes.inputPaper}>
        <InputField
          name={cpf.name}
          variant="outlined"
          label={cpf.label}
          fullWidth
        />
      </Grid>
      <Grid item className={classes.inputPaper}>
        <SelectField
          name={sexo.name}
          data={data}
          label={sexo.label}
          fullWidth
        />
      </Grid>
    </React.Fragment>
  );
}
