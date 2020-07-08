import React, { useState } from 'react'
import { Paper, Grid, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import { Formik, Form } from 'formik';
import Axios from 'axios'


import checkoutLoginModel from './loginModel/checkoutLoginModel'
import loginValidationSchema from './loginModel/loginValidationSchema'
import InitialValues from './loginModel/InitialValues'

import { useStyle, formBase, login } from '../Layout/styles'
import { InputField } from '../FieldStyle';

import { Link, useHistory } from 'react-router-dom';

import { Facebook, Email } from '@material-ui/icons';

const photo = require('../../images/petImg/dog.jpg')

const { formId, formField } = checkoutLoginModel;

const BtnsignUp = (props) => {
    const classes = props.useStyle()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Clique aqui
        </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to="/formCompany" className={classes.links} >

                    <MenuItem onClick={handleClose}>Criar empresa</MenuItem>
                </Link>
                <Link to="/formUser" className={classes.links} >

                    <MenuItem onClick={handleClose}>Criar usuário</MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

const OtherLogin = () => {

    return (
        <React.Fragment>

            <Button>
                <Email />
            </Button>

            <Button>
                <Facebook />
            </Button>
        </React.Fragment>
    )

}

export default function Login() {
    const classes = useStyle();
    const classesLogin = login();

    const history = useHistory()

    const [authRequestState, setauthRequestState] = useState(false)

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function _submitForm(values, actions) {
        await _sleep(1000);
        // alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);




        Axios.post("http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/autenticar", values)
        .then(function (response) {
            console.log(response);

        setauthRequestState(true)

        history.push("/")

          })
          .catch(function (error) {

              alert("Senha ou email incorretos")

            console.log(error);
          });

    }
    
    function _handleSubmit(values, actions) {

        _submitForm(values, actions)
    }
    

    return (
        <Paper elevation={2} className={classesLogin.paperMain}>
                <Grid container justify="center" alignContent="space-between" className={classes.fadeBack}>
                    <Grid item >
                        <Typography variant="h3">Login</Typography>
                    </Grid>
                    <Grid item xs={12}>

                            <Formik
                                initialValues={InitialValues}
                                TestvalidationSchema={loginValidationSchema}
                                onSubmit={_handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form id={formId}>
                                        <Grid container justify="center">
                                            <Grid item xs={10}>
                                                <Grid
                                                    container
                                                    direction="column"
                                                    justify="space-around"
                                                    alignItems="center"
                                                    className={classes.inputPaper}
                                                >
                                                    <InputField
                                                        name={formField.email.name}
                                                        variant="outlined"
                                                        label={formField.email.label}
                                                        fullWidth
                                                    />
                                                    <InputField
                                                        name={formField.senha.name}
                                                        type="password"
                                                        variant="outlined"
                                                        label={formField.senha.label}
                                                        fullWidth
                                                    />
                                                    
                                                    {/* <Grid item container orientation="row" justify="center">
                                                        <Grid item xs={8}>
                                                            <Typography>
                                                                Ainda não tem uma conta?
                                                        </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <BtnsignUp useStyle={useStyle} />
                                                        </Grid>
                                                    </Grid> */}

                                                    <Grid item container orientation="row" justify="center" alignContent="space-around">
                                                        <Grid>
                                                            <Typography variant="subtitle2">Entrar com:</Typography>
                                                        </Grid>
                                                        <OtherLogin/>
                                                    </Grid>

                                                    {/* <Link to="/formCompany" className={classes.links} > */}
                                                    <Button
                                                        disabled={isSubmitting}
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        className={classesLogin.submitBtn}
                                                    >
                                                        Entrar
                                                            </Button>
                                                    {/* </Link> */}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                    </Grid>
                </Grid>
        </Paper>
    )
}