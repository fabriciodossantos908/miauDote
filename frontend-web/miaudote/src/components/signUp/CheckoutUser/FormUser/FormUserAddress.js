import React from 'react';
import { Grid, Fade } from '@material-ui/core';
import { InputField, SelectField } from '../../../FieldStyle';
import Input from '../../../SignIn/Input';
import { RemoveMask } from '../../../../validations/RemoveMask';
import { isLength } from 'lodash';
import Axios from 'axios';

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
    formField: { uf, cep, cidade, bairro, logradouro, numero, complemento },
  } = props;

  const { values } = props;
  var cepPure = props.values.cep;
  var cepString = '';
  console.log(cepString);
  cepString = cepPure;
  const { active } = props;

  const findCep = (cep) => {
    const cepClear = cep.replace(/\D/g, '');

    Axios.get(`https://viacep.com.br/ws/${cepClear}/json/`)
      .then((response) => {
        const address = response.data;
        values.uf = address.uf;
        values.cidade = address.localidade;
        values.bairro = address.bairro;
        values.logradouro = address.logradouro;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  if (cepString.length === 9) {
    findCep(cepString);
    console.log('work');
    // handlingAddress(address, values)
    // setAddress(true)
  } else {
    console.log("didn 't work");
  }
  return (
    <React.Fragment>
      <Fade timeout={500} in={active}>
        <Grid
          item
          container
          xs={12}
          direction="row"
          className={classes.inputPaper}
        >
          <Grid item xs={6}>
            <Input
              name={cep.name}
              label={cep.name}
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            />
            {/* <InputField
              name={cep.name}
              variant="outlined"
              label={cep.label}
              fullWidth
            /> */}
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
      </Fade>

      <Fade timeout={600} in={active}>
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
      </Fade>

      <Fade timeout={700} in={active}>
        <Grid
          item
          container
          xs={12}
          direction="row"
          justify="space-between"
          className={classes.inputPaper}
        >
          <Grid item xs={5} alignItems="center">
            <InputField
              name={numero.name}
              variant="outlined"
              label={numero.label}
              fullWidth
            />
          </Grid>

          <Grid item xs={3} className={classes.inputPaper}>
            <SelectField
              name={uf.name}
              label={uf.label}
              data={states}
              fullWidth
            />
          </Grid>
          <Grid item xs={4} className={classes.inputPaper}>
            <InputField
              name={complemento.name}
              variant="outlined"
              label={complemento.label}
              fullWidth
            />
          </Grid>
        </Grid>
      </Fade>
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
