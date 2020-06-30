import React, { useState } from 'react';
import {
  Stepper,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid,
  Step,
  Paper
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import PetsIcon from '@material-ui/icons/Pets';
import { Formik, Form } from 'formik';

import CompanyBaseInfo from './FormCompany/companyBaseInfo';
import CompanyPersonalInfo from './FormCompany/companyPersonalInfo';
import CompanyAddress from './FormCompany/companyAddress';

import companyValidationSchema from './PetModel/companyValidationSchema';
import checkoutCompanyModel from './PetModel/checkoutCompanyModel';
import companyInitialValues from './PetModel/companyInitialValues';

import { useStyle, formBase, ColorlibConnector, useColorlibStepIconStyles, formPet} from '../Layout/styles'
import clsx from '../../../node_modules/clsx';

const steps = ['Informações do seu pet', 'Descrições do pet', 'Dados pessoais do pet'];
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
  const classesBase = formBase();
  const classesPet = formPet();
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

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <PetsIcon />,
      2: <PetsIcon />,
      3: <PetsIcon />,
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
  
  return (
    <React.Fragment>
      <Paper elevation={3} className={classesBase.FormPaper}>

          <Grid container >
        <Grid item xs={6} className={classes.imgSide}>
          <CardMedia
            className={classesBase.formImage}
            image="../../images/Developer_Fabricio.jpg"
          >
          <Grid container direction="row">
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              value={steps[activeStep]}>
              {steps[activeStep]}
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Stepper activeStep={activeStep} connector={<ColorlibConnector />} className={classesPet.stepper} orientation="vertical">
            {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
            </Stepper>
            </Grid>
            </Grid>
          </CardMedia>
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
      </Paper>
    </React.Fragment>
  );
}