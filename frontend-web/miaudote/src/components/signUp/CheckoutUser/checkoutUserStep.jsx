import React, { useState } from 'react';
import {
  Grid,
  Stepper,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  CardMedia,
  Paper
} from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { Formik, Form } from 'formik';

import FormUserInitialnfo from './FormUser/FormUserInitialnfo';
import FormUserPersonalInfo from './FormUser/FormUserPersonalInfo';
import FormUserAddress from './FormUser/FormUserAddress';
import ConfimEmail from './ConfirmEmail/ConfirmEmail';

import userValidationSchema from '../CheckoutUser/UserModel/userValidationSchema';
import userInitialValues from '../CheckoutUser/UserModel/userInitialValues';
import checkoutUserModel from '../CheckoutUser/UserModel/checkoutUserModel';

import { useStyle, formBase } from '../../Layout/styles';

<<<<<<< HEAD
const steps = ['BaseInfo', 'PersonalInfo', 'Address'];
=======
const photoDog = require('../../../images/petImg/dog.jpg')

const steps = ['Dados iniciais', 'Dados Pessoais', 'Endereço'];
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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

export default function CheckoutCompanyStep() {
  const classes = useStyle();
  const classesForm = formBase();
  const [activeStep, setActiveStep] = useState(0);
  const currentUserValidationSchema = userValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  // function _sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  async function _submitForm(values, actions) {
    await
      // _sleep(1000);
      // alert(JSON.stringify(values, null, 2));
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

  return (
      <React.Fragment>
      <Paper elevation={3} className={classesForm.FormPaper}>
        {activeStep === steps.length ? (
          <ConfimEmail />
        ) : (
          <Grid container >
<<<<<<< HEAD
               <Grid item xs={6} className={classes.imgSide}>
                      <CardMedia
                        className={classesForm.formImage}
                        image="../../images/Developer_Fabricio.jpg"
                      />
                    </Grid>
          <Grid item xs={6}>
=======
               <Grid item xs={5} className={classes.imgSide}>
                      <CardMedia
                        className={classesForm.formImage}
                        image={photoDog}
                      />
                    </Grid>
          <Grid item xs={7}>
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
            <Formik
              initialValues={userInitialValues}
              currentUserValidationSchema={currentUserValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId} container>
                  <Grid container direction="row">
                    <Grid item xs={12}>
                      <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        value={steps[activeStep]}>
                        {steps[activeStep]}
                      </Typography>
                      <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(label => (
                          <StepLabel key={label}>
                            <PetsIcon />
                          </StepLabel>
                        ))}
                      </Stepper>

                      {_renderStepContent(activeStep)}

                      <div className={classes.groupButtons}>

                        {activeStep !== 0 && (
                          <Button
                            onClick={_handleBack}
                            className={classes.buttons}
                            variant="contained"
                            color="primary"
                          >
                            Voltar
                     </Button>
                        )}
                        <div className={classes.wrapper}>
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.buttons}
                          >
                            {isLastStep ? 'Criar' : 'Próximo'}
                          </Button>
                          {isSubmitting && (
                            <CircularProgress
                              size={24}
                              className={classes.buttonProgress}
                            />
                          )}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
            </Grid>
            </Grid>
          )}
          </Paper>
      </React.Fragment>
  );
}