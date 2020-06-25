import React, { Component } from 'react'
import Cep from '../../../api/cep'
import Axios from 'axios'
import RemoveMask from '../../../validations/RemoveMask'
import { makeStyles, TextField, Paper, Grid, InputLabel, Box, Button } from '@material-ui/core';

const rmvMask = new RemoveMask()

const CepApi = new Cep()


export default class UserAddress extends Component {


    createUser = () => {
        this.SendCompany()
        // alert("usuário cadastrado!.")
    }

    SendCompany = () => {
        const { state } = this.props

        const user = {
            nome: state.nome,
            email: state.email,
            celular: rmvMask.trimMaskCell(state.celular),
            cep: rmvMask.trimMaskCep(state.cep),
            cidade: state.cidade,
            bairro: state.bairro,
            logradouro: state.logradouro,
            numero: state.numero,
            uf: state.uf,
            url_foto: state.url_foto,
            permissions: state.permissions,
            senha: state.senha
        }

        console.log(user)
        Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuario/registrar',
            user).then(
                (res) => {
                    console.log("created!" + res.data)
                });

        // <<<<<<< HEAD
        //         const values = {
        //             nome: this.props.nome, email: this.props.email, celular: this.props.celular,
        //             senha: this.props.senha,
        //             data_nascimento: this.props.data_nascimento,
        //             sexo: this.props.sexo,
        //             cpf: this.props.cpf,
        //             cep: this.props.cep,
        //             cidade: this.props.cidade,
        //             bairro: this.props.bairro,
        //             logradouro: this.props.logradouro,
        //             uf: this.props.uf,
        //             url_foto: this.props.url_foto,
        //             permissions: "USER"
        //         }
        //         console.log(values)
        //         if (this.SendCompany(values)) {
        //             console.log("usuário cadastrado!.")

        //         }

        //         return alert("Verifique se todos os campos estão preenchidos!.")

        //     }


        //     SendCompany = (values) => {


        //         Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/registrar',
        //             values)


    }
    consultCep(event) {
        const address = CepApi.getAddress()

        this.setState({
            [event.target.name.bairro]: address.bairro
        })
    }

    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
              flexGrow: 1,
              '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
              }
            },
            paper: {
              padding: theme.spacing(2),
              margin: 'auto',
              marginTop: 100,
              maxWidth: 800,
              minHeight: 500
            },
          }));

          const classes = useStyles()

        return (
            <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid
                xs={4}
                  container
                  direction="column"
                  justify="center"
                  alignItems="flex-start"
                >            <Box item xs={3} sm container color="" >
                    <InputLabel>Teste</InputLabel>
                  </Box>
                </Grid>
                <Grid
                  xs
                  container
                  direction="column"
                  justify="flex-end"
                  alignItems="center"
                >          
      
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Outlined" variant="outlined" />
      
                    <Button variant="contained" color="primary">Avançar</Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
              )
    }
}
