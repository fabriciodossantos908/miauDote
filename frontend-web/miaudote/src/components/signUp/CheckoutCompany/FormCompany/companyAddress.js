import React from 'react';
import { Grid, Typography } from '@material-ui/core';
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
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={cep.name} label={cep.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={cidade.name} label={cidade.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={bairro.name} label={bairro.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={logradouro.name} label={logradouro.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={complemento.name} label={complemento.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={numero.name} label={uf.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={uf.name}
            label={uf.label}
            data={states}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
