import React from 'react'
import { Paper, CardMedia, Grid, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import { Formik, Form } from 'formik';

import checkoutLoginModel from './loginModel/checkoutLoginModel'
import loginValidationSchema from './loginModel/loginValidationSchema'
import InitialValues from './loginModel/InitialValues'

import { useStyle, formBase, login } from '../Layout/styles'
import { InputField } from '../FieldStyle';

import { Facebook, Email } from '@material-ui/icons';

const photo = require('../../images/petImg/dog.jpg')

const { formId, formField } = checkoutLoginModel;

// function _sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }


const BtnsignUp = () => {
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
                <MenuItem onClick={handleClose}>Criar empresa</MenuItem>
                <MenuItem onClick={handleClose}>Criar usuário</MenuItem>
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
        <Paper className={classesLogin.paperMain}>
            <CardMedia
                className={classesBase.formImage}
                image={photo}
            >
                <Typography variant="h3">Login</Typography>

                <Paper elevation={3} className={classesLogin.paperForm}>

                    <Formik
                        initialValues={InitialValues}
                        petValidationSchema={loginValidationSchema}
                        onSubmit={_handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form id={formId} container>
                                <Grid container direction="row">
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            xs={10}
                                            direction="column"
                                            justify="space-around"
                                            alignItems="center"
                                            className={classes.inputPaper}
                                        >
                                            <div>
                                                <Button>
                                                    <Email />
                                                </Button>

                                                <Button>
                                                    <Facebook />
                                                </Button>

                                            </div>
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
                                            <Typography>
                                                Ainda não tem uma conta? <BtnsignUp />
                                            </Typography>
                                            <Button type="submit" variant="contained">
                                                Entrar
                                                </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </CardMedia>
        </Paper>
    )
}