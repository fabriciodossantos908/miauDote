import React, { useState, useEffect } from 'react';
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

import clsx from 'clsx'

import Login from '../../SignIn/Login'

import FormUserInitialnfo from './FormUser/FormUserInitialnfo';
import FormUserPersonalInfo from './FormUser/FormUserPersonalInfo';
import FormUserAddress from './FormUser/FormUserAddress';
import ConfimEmail from './ConfirmEmail/ConfirmEmail';

import userValidationSchema from '../CheckoutUser/UserModel/userValidationSchema';
import userInitialValues from '../CheckoutUser/UserModel/userInitialValues';
import checkoutUserModel from '../CheckoutUser/UserModel/checkoutUserModel';

import { useStyle, formBase, useColorlibStepIconStyles, ColorlibConnectorHorizontal } from '../../Layout/styles';

const steps = ['Dados iniciais', 'Dados Pessoais', 'Endereço'];
const { formId, formField } = checkoutUserModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <FormUserInitialnfo formField={formField} useStyle={useStyle} />;
    case 1:
      return <FormUserPersonalInfo formField={formField} useStyle={useStyle} />;
    case 2:
      return <FormUserAddress formField={formField} useStyle={useStyle} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutUSerStep() {
  const classes = useStyle();
  const classesForm = formBase();
  const [activeStep, setActiveStep] = useState(0);
  const currentUserValidationSchema = userValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const [isLogin, setIsLogin] = useState(false)

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

  // function _sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  async function _submitForm(values, actions) {
    await
      // _sleep(1000);
      alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  function handleLogin() {
    setIsLogin((isLogin) => (!isLogin))
  }
  function handleBackLogin() {
    setIsLogin((isLogin) => (!isLogin))
  }

  return (
    <React.Fragment>
      <Paper elevation={3} className={classesForm.FormPaper}>
        {activeStep === steps.length ? (
          <ConfimEmail />
        ) : (
            <Formik
              initialValues={userInitialValues}
              currentUserValidationSchema={currentUserValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId} container>
                  <Grid container orientation="column">
                    <Grid item
                      container
                      xs={12}
                      justify="center"
                      alignItems="center"
                      direction="column"
                    >
                      <Grid>
                        <Typography
                          variant="h4"
                          align="center"

                        >
                          Cadastre-se como usuário
                        </Typography>
                      </Grid>
                      {isLogin === false && (
                      <Grid item xs={6}>
                        <Stepper activeStep={activeStep} connector={<ColorlibConnectorHorizontal />}>
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel StepIconComponent={ColorlibStepIcon} >
                              </StepLabel>
                            </Step>
                          ))}
                        </Stepper>

                      </Grid>
                    
                      )}
                    </Grid>
                    {/* Content grid */}
                    <Grid item xs={10} className={classesForm.content}>

                      {isLogin === false ? _renderStepContent(activeStep) : <Login />}
                    </Grid>
                    {/* Button grid */}
                      <Grid item container xs={12} justify="flex-end" spacing={1} className={classes.groupButtons}>
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
                        ) :
                        
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

                        }
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