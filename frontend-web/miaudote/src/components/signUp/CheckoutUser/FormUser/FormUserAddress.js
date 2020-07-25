import React from 'react';
import { Grid, Fade } from '@material-ui/core';
import { InputField, SelectField } from '../../../FieldStyle';
import Input from '../../../SignIn/Input';
import { RemoveMask } from '../../../../validations/RemoveMask';
import { isLength } from 'lodash';

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

  const values = props.values.cep;
  const { active } = props;
//  const cep = JSON.stringify(values)
console.log(
  toString(values)
)

  // values.isLength === 5 ? console.log("match") : console.log("test")

  const findCep = () => {
		const { cep } = this.state
		var _cep = cep.replace(/\D/g, '')

		//Verifica se campo cep possui valor informado.
		if (_cep != "") {

			var cepValidate = /^[0-9]{8}$/;

			if (cepValidate.test(_cep)) {
				console.log("iguais")
				//Preenche os campos com "..." enquanto consulta webservice.

				this.setState({ address: "..." })
				this.setState({ neighborhood: "..." })
				this.setState({ state: "..." })
				this.setState({ city: "..." })

				// const cepp = '01001000'

				const url = `https://viacep.com.br/ws/` + _cep + `/json/`;

				let viacep = fetch(url)
					.then(response => (response.json()))
					// .then (response => console.log(response))
					.then((json) => {
						console.log(json)
						if (json.erro != true) {
							this.setState({ address: json.logradouro })
							this.setState({ neighborhood: json.bairro })
							this.setState({ state: json.uf })
							this.setState({ city: json.localidade })
						} else {
							alert(
								'Algo deu errado',
								'Cep não encontrado. Por favor verifique',
								[
									{ text: 'OK', onPress: () => console.log('OK Pressed') }
								],
								{ cancelable: false }
							);
						}


					})
					.catch((json) => {
						console.log(json.erro)
						// if(json.erro == true){
						//   console.log("Cep inválido")
						// }
					})


			} else {
				alert(
					'Algo deu errado',
					'Cep inválido. Por favor verifique',
					[
						{ text: 'OK', onPress: () => console.log('OK Pressed') }
					],
					{ cancelable: false }
				);
			}



		}

		console.log(cep)
		console.log(_cep)

	}

  // const cep = values.cep;

  // if (cep > 8) {
  //   const readyCep = RemoveMask(cep);
  //   //   the axios get query to cep api

  //   // the obj with the response data

  //   // change the values data with the response obj
  // }

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
            {/* <Input
              name={cep.name}
              label={cep.name}
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            /> */}
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
