import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid
} from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { Formik, Form } from 'formik';

import CompanyBaseInfo from './FormCompany/companyBaseInfo';
import CompanyPersonalInfo from './FormCompany/companyPersonalInfo';
import CompanyAddress from './FormCompany/companyAddress';
import ConfirmEmail from './ConfirmEmail/ConfirmEmail';

import companyValidationSchema from './CompanyModel/companyValidationSchema';
import checkoutCompanyModel from './CompanyModel/checkoutCompanyModel';
import companyInitialValues from './CompanyModel/companyInitialValues';

import { useStyle } from '../../Layout/styles'

const steps = ['BaseInfo', 'PersonalData', 'Address'];
const { formId, formField } = checkoutCompanyModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <CompanyBaseInfo formField={formField} useStyle={useStyle} />;
    case 1:
      return <CompanyPersonalInfo formField={formField} useStyle={useStyle} />;
    case 2:
      return <CompanyAddress formField={formField} useStyle={useStyle} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutCompanyStep() {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = companyValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
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

  return (
    <React.Fragment>
      {activeStep === steps.length ? (
        <ConfirmEmail />
      ) : (
          <Formik
            initialValues={companyInitialValues}
            companyValidationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId} container>
                <Grid item xs={6} className={classes.imgSide}></Grid>
                <Grid item xs={6}>
                  <Typography component="h1" variant="h4" className={classes.titleForm}>
                    Sign up Empresa
                </Typography>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map(label => (
                      <StepLabel key={label}>
                        <PetsIcon />
                      </StepLabel>
                    ))}
                  </Stepper>

                  {_renderStepContent(activeStep)}

                  <div className={classes.buttons}>

                    {activeStep !== 0 && (
                      <Button
                        onClick={_handleBack}
                        className={classes.button}
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
                        className={classes.button}
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
              </Form>
            )}
          </Formik>
        )}
    </React.Fragment>
  );
}