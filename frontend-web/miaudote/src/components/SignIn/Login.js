import React from 'react'
import { Paper, CardMedia, Grid, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import { Formik, Form } from 'formik';

import checkoutLoginModel from './loginModel/checkoutLoginModel'
import loginValidationSchema from './loginModel/loginValidationSchema'
import InitialValues from './loginModel/InitialValues'

import { useStyle, formBase, login } from '../Layout/styles'
import { InputField } from '../FieldStyle';

import { Link } from 'react-router-dom';

import { Facebook, Email } from '@material-ui/icons';

const photo = require('../../images/petImg/dog.jpg')

const { formId, formField } = checkoutLoginModel;

// function _sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }


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

async function _submitForm(values, actions) {
    // await _sleep(1000);
    // alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

}

function _handleSubmit(values, actions) {
    _submitForm(values, actions);
}

export default function Login() {
    const classes = useStyle();
    const classesBase = formBase();
    const classesLogin = login();

    return (
        <Paper elevation={2} className={classesLogin.paperMain}>
            <CardMedia
                className={classesBase.formImage}
                image={photo}
            >
                <Grid container justify="center" alignContent="space-between" className={classes.fadeBack}>
                    <Grid item >
                        <Typography variant="h3">Login</Typography>
                    </Grid>
                    <Grid item xs={12} justify="center">
                        <Paper elevation={3} className={classesLogin.paperForm}>

                            <Formik
                                initialValues={InitialValues}
                                petValidationSchema={loginValidationSchema}
                                onSubmit={_handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form id={formId} container>
                                        <Grid container justify="center">
                                            <Grid item xs={10}>
                                                <Grid
                                                    container
                                                    xs={10}
                                                    direction="column"
                                                    justify="space-around"
                                                    alignItems="center"
                                                    className={classes.inputPaper}
                                                >
                                                    <Grid item container orientation="row" justify="center" alignContent="space-around">
                                                        <Grid>
                                                            <Typography variant="subtitle2">Entrar com:</Typography>
                                                        </Grid>
                                                        <Grid>

                                                            <Button>
                                                                <Email />
                                                            </Button>

                                                            <Button>
                                                                <Facebook />
                                                            </Button>
                                                        </Grid>

                                                    </Grid>
                                                    <InputField
                                                        name={formField.email.name}
                                                        variant="outlined"
                                                        label={formField.email.label}
                                                        fullWidth
                                                    />
                                                    <InputField
                                                        name={formField.senha.name}
                                                        variant="outlined"
                                                        label={formField.senha.label}
                                                        fullWidth
                                                    />
                                                    <Grid item container orientation="row" justify="center">
                                                        <Grid item xs={8}>
                                                            <Typography>
                                                                Ainda não tem uma conta?
                                                        </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <BtnsignUp useStyle={useStyle} />
                                                        </Grid>
                                                    </Grid>

                                                    <Link to="/formCompany" className={classes.links} >
                                                        <Button type="submit" variant="contained" className={classesLogin.submitBtn}>
                                                            Entrar
                                                    </Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                        </Paper>
                    </Grid>
                </Grid>
            </CardMedia>
        </Paper>
    )
}