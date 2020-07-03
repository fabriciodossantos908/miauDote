import React from 'react'
import { Paper, CardMedia, Grid, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';

import checkoutLoginModel from './loginModel/checkoutLoginModel'
import loginValidationSchema from './loginModel/loginValidationSchema'
import InitialValues from './loginModel/InitialValues'

import { useStyle, formBase } from '../Layout/styles'
import { InputField } from '../FieldStyle';

const { formId, formField } = checkoutLoginModel;

// function _sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

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

    return (
        <Paper elevation={3} className={classesBase.FormPaper}>

            <Grid container >

                <Grid item xs={6}>

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
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
            <Grid item xs={6} className={classes.imgSide}>
                <CardMedia
                    className={classesBase.formImage}
                    image={'../../images/petImg/cat.jpg'}
                >
                </CardMedia>
            </Grid>
        </Paper>
    )
}