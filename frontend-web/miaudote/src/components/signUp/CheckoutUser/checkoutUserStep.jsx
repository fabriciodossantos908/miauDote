import React, { useState } from 'react';
import {
  Grid,
  Stepper,
  StepLabel,
  Button,
  Typography,
  Paper,
  Step,
} from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { Formik, Form } from 'formik';

import clsx from 'clsx';

import Login from '../../SignIn/Login';

import FormUserInitialnfo from './FormUser/FormUserInitialnfo';
import FormUserPersonalInfo from './FormUser/FormUserPersonalInfo';
import FormUserAddress from './FormUser/FormUserAddress';
import ConfimEmail from './ConfirmEmail/ConfirmEmail';

import userValidationSchema from '../CheckoutUser/UserModel/userValidationSchema';
import userInitialValues from '../CheckoutUser/UserModel/userInitialValues';
import checkoutUserModel from '../CheckoutUser/UserModel/checkoutUserModel';

import checkoutLoginModel from '../../SignIn/loginModel/checkoutLoginModel';
import loginValidationSchema from '../../SignIn/loginModel/loginValidationSchema';
import InitialValues from '../../SignIn/loginModel/InitialValues';

import {
  useStyle,
  formBase,
  useColorlibStepIconStyles,
  ColorlibConnectorHorizontal,
} from '../../Layout/styles';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { palette } from '../../Layout/theme';

const steps = ['Dados iniciais', 'Dados Pessoais', 'Endereço'];

const formsFields = [
  {
    formId: checkoutUserModel.formId,
    formField: checkoutUserModel.formField,
  },
  {
    formId: checkoutLoginModel.formId,
    formField: checkoutLoginModel.formField,
  },
];

function _renderStepContent(step, active, values) {
  switch (step) {
    case 0:
      return (
        <FormUserInitialnfo
          formField={formsFields[0].formField}
          useStyle={useStyle}
        />
      );
    case 1:
      return (
        <FormUserPersonalInfo
          formField={formsFields[0].formField}
          useStyle={useStyle}
          active={active}
        />
      );
    case 2:
      return (
        <FormUserAddress
          formField={formsFields[0].formField}
          useStyle={useStyle}
          active={active}
          values={values}
        />
      );
    default:
      return <div>Not Found</div>;
  }
}

function _renderLoginContent() {
  return <Login formField={formsFields[1].formField} />;
}

export default function CheckoutUSerStep() {
  const classes = useStyle();
  const classesForm = formBase();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const currentUserValidationSchema = userValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const [isLogin, setIsLogin] = useState(false);
  const [authRequesStatus, setauthRequesStatus] = useState(false);
  const [active, setActive] = useState(false);

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
      1: <PetsIcon />,
      2: <PetsIcon />,
      3: <PetsIcon />,
      4: <PetsIcon />,
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    // await _sleep(1000);
    delete values.senha_confirm;
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    Axios.post(
      'http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/registrar',
      values,
    )
      .then(function (response) {
        alert('Cadastrado com sucesso!');
        console.log(response);
      })
      .catch(function (error) {
        alert('ops! erro ao cadastrar');
        console.log(error);
      });

    setActiveStep(activeStep + 1);
  }

  async function _LoginSubmit(values, actions) {
    // await _sleep(1000);
    //alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    Axios.post(
      'http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/autenticar',
      values,
    )
      .then(function (response) {
        setauthRequesStatus(true);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', response.data.usuario.nome);
        localStorage.setItem('id', response.data.usuario.id);
      })
      .catch(function (error) {
        alert('ops! Usuário e ou senha estão errados');
        console.log(error);
        setauthRequesStatus(false);
      });
    if (authRequesStatus === true) {
      history.push('/');
    }
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActive(true);
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  //   use them as a trigger to change the formik params
  function handleLogin() {
    setIsLogin((isLogin) => !isLogin);
  }
  function handleBackLogin() {
    setIsLogin((isLogin) => !isLogin);
  }

  return (
    <React.Fragment>
      <Paper elevation={3} className={classesForm.FormPaper}>
        {activeStep === steps.length ? (
          <ConfimEmail />
        ) : (
          <Formik
            initialValues={
              isLogin === false ? userInitialValues : InitialValues
            }
            // validationSchema={
            //   isLogin === false ? currentUserValidationSchema : ''
            // }
            onSubmit={isLogin === false ? _handleSubmit : _LoginSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form
                id={
                  isLogin === false
                    ? formsFields[0].formId
                    : formsFields[1].formId
                }
                container
              >
                <Grid container orientation="column">
                  <Grid
                    item
                    container
                    xs={12}
                    justify="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Grid>
                      <Typography variant="h4" align="center">
                        {isLogin === false
                          ? 'Cadastre-se como usuário'
                          : 'Logar'}
                      </Typography>
                    </Grid>
                    {isLogin === false && (
                      <Grid item xs={6}>
                        <Stepper
                          activeStep={activeStep}
                          connector={<ColorlibConnectorHorizontal />}
                        >
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel
                                StepIconComponent={ColorlibStepIcon}
                              ></StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      </Grid>
                    )}
                  </Grid>
                  {/* Content grid */}
                  <Grid item xs={10} className={classesForm.content}>
                    {isLogin === false
                      ? _renderStepContent(activeStep, active, values)
                      : _renderLoginContent()}
                  </Grid>
                  {/* Button grid */}
                  <Grid
                    item
                    container
                    xs={12}
                    justify="flex-end"
                    spacing={1}
                    className={classes.groupButtons}
                  >
                    <Grid item>
                      <Button
                        onClick={handleBackLogin}
                        className={classes.buttons}
                        variant="contained"
                      >
                        {isLogin === true ? 'Volta' : 'Logar'}
                      </Button>
                    </Grid>
                    {activeStep !== 0 && (
                      <Grid item>
                        <Button
                          onClick={_handleBack}
                          className={classes.buttons}
                          variant="contained"
                        >
                          Voltar
                        </Button>
                      </Grid>
                    )}

                    {isLogin === false ? (
                      <Grid item>
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          className={classes.buttons}
                        >
                          {isLastStep ? 'Criar' : 'Próximo'}
                        </Button>
                        {/* 
                          className={classes.wrapper}
                          {isSubmitting && (
                            <CircularProgress
                              size={24}
                              className={classes.buttonProgress}
                            />
                          )} */}
                      </Grid>
                    ) : (
                      <Grid item>
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          className={classes.buttons}
                        >
                          Logar
                        </Button>
                        {/* 
                        className={classes.wrapper}
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )} */}
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        )}
      </Paper>
    </React.Fragment>
  );
}
