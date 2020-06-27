import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: 'SP',
    label: 'SP São Paulo'
  },
  {
    value: 'RJ',
    label: 'Rio de Janeiro'
  },
  {
    value: 'MG',
    label: 'Minas Gerais'
  }
];


export default function CompanyAddress(props) {
  const classes = props.useStyle()
  const {
    formField: {
      complemento,
      uf,
      cep,
      cidade,
      bairro,
      logradouro,
      numero,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} justify="flex-end">
        <Paper item xs={6} sm={6} className={classes.inputPaper}>
            <InputField name={cep.name} label={cep.label} fullWidth />
            <InputField name={cidade.name} label={cidade.label} fullWidth />
            <InputField name={bairro.name} label={bairro.label} fullWidth />
            <InputField name={logradouro.name} label={logradouro.label} fullWidth />
            <InputField name={complemento.name} label={complemento.label} fullWidth />
            <InputField name={numero.name} label={numero.label} fullWidth />
          <Grid item xs={12} sm={6
          }>
            <SelectField
              name={uf.name}
              label={uf.label}
              data={states}
              fullWidth
            />
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
