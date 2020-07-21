import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField, SelectField } from '../../../FieldStyle';

const states = [
  {
    value: undefined,
    label: 'Vazio',
  },
  {
    value: 'SP',
    label: 'SP São Paulo',
  },
  {
    value: 'RJ',
    label: 'Rio de Janeiro',
  },
  {
    value: 'MG',
    label: 'Minas Gerais',
  },
];

export default function FormUserAddress(props) {
  const classes = props.useStyle();
  const {
    formField: { uf, cep, cidade, bairro, logradouro, numero },
  } = props;
  return (
    <React.Fragment>
      <Grid
        item
        container
        xs={12}
        direction="row"
        className={classes.inputPaper}
      >
        <Grid item xs={6}>
          <InputField
            name={cep.name}
            variant="outlined"
            label={cep.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            name={logradouro.name}
            variant="outlined"
            label={logradouro.label}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        direction="row"
        className={classes.inputPaper}
      >
        <Grid item xs={6}>
          <InputField
            name={cidade.name}
            variant="outlined"
            label={cidade.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            name={bairro.name}
            variant="outlined"
            label={bairro.label}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        direction="row"
        justify="space-between"
        className={classes.inputPaper}
      >
        <Grid item xs={6} alignItems="center">
          <InputField
            name={numero.name}
            variant="outlined"
            label={numero.label}
            fullWidth
          />
        </Grid>

        <Grid item xs={5} className={classes.inputPaper}>
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
