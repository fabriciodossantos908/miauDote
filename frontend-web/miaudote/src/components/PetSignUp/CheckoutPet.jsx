import React, { useState } from 'react';
import {
  Stepper,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid,
  Step,
  Paper,
  Container
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import PetsIcon from '@material-ui/icons/Pets';
import { Formik, Form } from 'formik';

import PetInfo from './FormPet/PetInfo';
import PetDesc from './FormPet/PetDesc';
import PetAddress from './FormPet/PetAddress';

import petValidationSchema from './PetModel/PetValidationSchema';
import checkoutPetModal from './PetModel/checkoutPetModel';
import petInitialInfo from './PetModel/petInitialValues';

import { useStyle, formBase, ColorlibConnector, useColorlibStepIconStyles, formPet} from '../Layout/styles'
import clsx from '../../../node_modules/clsx';

const photo = require('../../images/petImg/dog.jpg')
const photoDog = require('../../images/petImg/dog.jpg')
const photoCat = require('../../images/petImg/cat.jpg')

const listPhoto = [photo, photoDog, photoCat]
const steps = ['Informações do seu pet', 'Descrições do pet', 'Dados pessoais do pet'];
const { formId, formField } = checkoutPetModal;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <PetInfo formField={formField} useStyle={useStyle} />;
    case 1:
      return <PetDesc formField={formField} useStyle={useStyle} />;
    case 2:
      return <PetAddress formField={formField} useStyle={useStyle} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutCompanyStep() {
  const classes = useStyle();
  const classesBase = formBase();
  const classesPet = formPet();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = petValidationSchema[activeStep];
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
            image={listPhoto[activeStep]}
          >
          <Grid container direction="row">
            <Grid item container xs={12} justify="center">
            </Grid>
            <Grid item xs={12}>
            <Stepper activeStep={activeStep} connector={<ColorlibConnector />} className={classesPet.stepper} orientation="vertical">
            {steps.map((label) => (
          <Step key={label} className={classesPet.stepper}>
            <StepLabel color={classesBase.titleStep} StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
            </Stepper>
            </Grid>
            </Grid>
          </CardMedia>
        </Grid>
        <Grid item xs={6}>

          <Formik
            initialValues={petInitialInfo}
            petValidationSchema={petValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId} container>
                <Grid container direction="row">
                  <Grid item xs={12}>
                  <Typography
              variant="h4"
              align="center"
              value={steps[activeStep]}>
              {steps[activeStep]}
            </Typography>

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