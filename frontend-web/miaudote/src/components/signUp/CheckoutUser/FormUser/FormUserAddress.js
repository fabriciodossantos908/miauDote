import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../../FieldStyle';

const states = [
  {
    value: undefined,
    label: 'Vazio'
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


export default function FormUserAddress(props) {
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
      <Typography variant="h6" gutterBottom>
        Seu endereço
      </Typography>
      <Grid container spacing={3} justify="flex-end">
        <Paper item xs={6} sm={6} className={classes.inputPaper}>
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
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

    // createUser = () => {
    //     this.SendCompany()
    //     // alert("usuário cadastrado!.")
    // }

    // SendCompany = () => {
    //     const { state } = this.props

    //     const user = {
    //         nome: state.nome,
    //         email: state.email,
    //         celular: rmvMask.trimMaskCell(state.celular),
    //         cep: rmvMask.trimMaskCep(state.cep),
    //         cidade: state.cidade,
    //         bairro: state.bairro,
    //         logradouro: state.logradouro,
    //         numero: state.numero,
    //         uf: state.uf,
    //         url_foto: state.url_foto,
    //         permissions: state.permissions,
    //         senha: state.senha
    //     }

    //     console.log(user)
    //     Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuario/registrar',
    //         user).then(
    //             (res) => {
    //                 console.log("created!" + res.data)
    //             });

    // }
    // consultCep(event) {
    //     const address = CepApi.getAddress()

    //     this.setState({
    //         [event.target.name.bairro]: address.bairro
    //     })
    // }