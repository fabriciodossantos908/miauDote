import React from 'react';
<<<<<<< HEAD
import { Grid, Typography, Paper, Container } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';
=======
import { Grid } from '@material-ui/core';
import { InputField, SelectField } from '../../../FieldStyle';
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500

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
<<<<<<< HEAD
      <Grid container spacing={3} justify="flex-end">
        <Container item xs={6} sm={6} className={classes.inputPaper}>
            <InputField name={cep.name} label={cep.label} fullWidth />
            <InputField name={cidade.name} label={cidade.label} fullWidth />
            <InputField name={bairro.name} label={bairro.label} fullWidth />
            <InputField name={logradouro.name} label={logradouro.label} fullWidth />
            <InputField name={complemento.name} label={complemento.label} fullWidth />
            <InputField name={numero.name} label={numero.label} fullWidth />
          <Grid item xs={12} sm={6}>
            <SelectField
              name={uf.name}
              label={uf.label}
              data={states}
              fullWidth
            />
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
=======
    <Grid
    container
    xs={10}
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.inputPaper}>

        <Grid
            container
            xs={12}
            direction="row"
        >
        <Grid item xs={6}>
        <InputField name={cep.name} variant="outlined" label={cep.label} fullWidth />
        </Grid>
        <Grid item xs={6}>
        <InputField name={logradouro.name} variant="outlined" label={logradouro.label} fullWidth />
        </Grid>
        </Grid>
        <Grid
            container
            xs={12}
            direction="row"
        >
            <Grid item xs={6}>
                <InputField name={cidade.name} variant="outlined" label={cidade.label} fullWidth />
            </Grid>
            <Grid item xs={6}>
                <InputField name={bairro.name} variant="outlined" label={bairro.label} fullWidth />
            </Grid>

        </Grid>
        <InputField name={complemento.name} variant="outlined" label={complemento.label} fullWidth />
        <Grid
            container
            xs={12}
            direction="row"
            justify="space-between"
        >
            <Grid item xs={6} alignItems="center">
                <InputField name={numero.name} variant="outlined" label={numero.label} fullWidth />
            </Grid>
            <Grid item xs={5} >
                <SelectField
                    name={uf.name}
                    label={uf.label}
                    data={states}
                    fullWidth
                />
            </Grid>
        </Grid>
    </Grid>
</React.Fragment>
);
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
}
