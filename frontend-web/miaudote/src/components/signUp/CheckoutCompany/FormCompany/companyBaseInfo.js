import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';

const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'New York'
  },
  {
    value: '2',
    label: 'Chicago'
  },
  {
    value: '3',
    label: 'Saigon'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Florida'
  },
  {
    value: '22',
    label: 'Michigan'
  },
  {
    value: '33',
    label: 'Texas'
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'United States'
  },
  {
    value: '222',
    label: 'Italy'
  },
  {
    value: '333',
    label: 'Vietnam'
  }
];

export default function CompanyBaseInfo(props) {
  const classes = props.useStyle();

  const {
    formField: {
      nome_representante,
      email_representante,
      senha,
      senha_confirm,
      }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Dados Iniciais
      </Typography>
      <Grid container spacing={3}  justify="flex-end">
        <Paper item xs={6} sm={6} className={classes.inputPaper}>
          <InputField name={nome_representante.name} label={nome_representante.label} fullWidth />
          <InputField name={email_representante.name} label={email_representante.label} fullWidth />
          <InputField name={senha.name} label={senha.label} fullWidth />
          <InputField name={senha_confirm.name} label={senha_confirm.label} fullWidth />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
