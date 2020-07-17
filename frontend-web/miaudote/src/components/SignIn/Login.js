import React, { useState } from 'react'
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';
import Axios from 'axios'


import checkoutLoginModel from './loginModel/checkoutLoginModel'
import loginValidationSchema from './loginModel/loginValidationSchema'
import InitialValues from './loginModel/InitialValues'

import { useStyle, login } from '../Layout/styles'
import { InputField } from '../FieldStyle';

import { Link, useHistory } from 'react-router-dom';

import { Facebook, Email } from '@material-ui/icons';

const { formId, formField } = checkoutLoginModel;


const OtherLogin = (props) => {
    const classes = props.classesLogin
    return (
        <React.Fragment>

            <Button startIcon={<Email />} className={classes.btnSocialLogin}>
                Email
            </Button>

            <Button startIcon={<Facebook />}>
                Facebook
            </Button>
        </React.Fragment>
    )

}

export default function Login() {
    const classes = useStyle();
    const classesLogin = login();
    const [authRequesStatus, setauthRequesStatus] = useState(false)
    let history = useHistory()

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function _submitForm(values, actions) {
        await _sleep(1000);
        // alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);

        Axios.post("http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/autenticar", values)
            .then(function (response) {
                setauthRequesStatus(true)
                history.push("/", console.log(response))
            })
            .catch(function (error) {
                alert("ops! Usuário e ou senha estão errados")
                console.log(error)
                setauthRequesStatus(false)
            });
    }

    function _handleSubmit(values, actions) {
        _submitForm(values, actions);
    }

    return (
        <Grid container justify="center" alignContent="space-between" >
            <Grid item className={classesLogin.titleForm}>
                <Typography variant="h3">Login</Typography>
            </Grid>
            <Grid item xs={12}>
                <Formik
                    initialValues={InitialValues}
                    loginValidationSchema={loginValidationSchema}
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
                                        <Link to="/making" className={classes.links} >
                                            Esqueceu sua senha? Clique aqui
                                                        </Link>

                                        <Grid item container orientation="row" justify="center" alignContent="space-around">
                                            <Grid style={{ marginRight: 10 }}>
                                                <Typography variant="subtitle2">Entrar com:</Typography>
                                            </Grid>
                                            <OtherLogin classesLogin={classesLogin} />
                                        </Grid>
                                        {/* <Link to="/formCompany" className={classes.links} > */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    )
}