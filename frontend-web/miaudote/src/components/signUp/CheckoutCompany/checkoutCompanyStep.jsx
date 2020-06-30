import React, { useState } from 'react';
import {
  Stepper,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import PetsIcon from '@material-ui/icons/Pets';
import { Formik, Form } from 'formik';

import CompanyBaseInfo from './FormCompany/companyBaseInfo';
import CompanyPersonalInfo from './FormCompany/companyPersonalInfo';
import CompanyAddress from './FormCompany/companyAddress';
import ConfirmEmail from './ConfirmEmail/ConfirmEmail';

import companyValidationSchema from './CompanyModel/companyValidationSchema';
import checkoutCompanyModel from './CompanyModel/checkoutCompanyModel';
import companyInitialValues from './CompanyModel/companyInitialValues';

import { useStyle, formBase } from '../../Layout/styles'

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
  const classesCompany = formBase();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = companyValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  // function _sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  async function _submitForm(values, actions) {
    // await _sleep(1000);
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
      {activeStep === steps.length ? (
        <ConfirmEmail />
      ) : (
          <Grid container >
            <Grid item xs={6} className={classes.imgSide}>
              <CardMedia
                className={classesCompany.formImage}
                image="../../images/Developer_Fabricio.jpg"
              />
            </Grid>
            <Grid item xs={6}>

              <Formik
                initialValues={companyInitialValues}
                companyValidationSchema={currentValidationSchema}
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
                            >
                              Voltar
                        </Button>
                          )}
                          <div className={classes.wrapper}>
                            <Button
                              disabled={isSubmitting}
                              type="submit"
                              variant="contained"
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
    </React.Fragment>
  );
}