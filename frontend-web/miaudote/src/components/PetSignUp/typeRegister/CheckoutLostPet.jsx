import React, { useState } from 'react';
import {
  Stepper,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid,
  Step,
} from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { Formik, Form } from 'formik';
import clsx from 'clsx';

import PetType from '../FormLostPet/PetType';
import PetDesc from '../FormLostPet/PetDesc';
import PetAddress from '../FormLostPet/PetLostAddress';

// import petValidationSchema from '../PetModel/PetValidationSchema';
import checkoutPetModal from '../lostPetModel/checkoutPetModel';
import petInitialInfo from '../lostPetModel/petInitialValues';

import {
  useStyle,
  formBase,
  useColorlibStepIconStyles,
} from '../../Layout/styles';
// import TestStepper from '../../pages/testStepper';
// import { useHistory } from 'react-router-dom';

const steps = ['Localização', 'Descrição do pet', 'Tipo do seu pet'];
const labels = [
  'Quando que você o viu pela ultima vez?',
  'Pode descrever suas características?',
  'Como era seu pet?',
];
const { formId, formField } = checkoutPetModal;

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <PetAddress formField={formField} useStyle={useStyle} />;
    case 1:
      return <PetDesc formField={formField} useStyle={useStyle} />;
    case 2:
      return <PetType formField={formField} useStyle={useStyle} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutCompanyStep() {
  const classes = useStyle();
  const classesForm = formBase();
  const [activeStep, setActiveStep] = useState(0);
  // const [createStatus, setCreacteStatus] = useState(false);
  // const currentValidationSchema = petValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  // const history = useHistory()
  // function _sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  async function submitForm(values, actions) {
    // await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    // history.push('/profile')
  }

  function handleSubmit(values, actions) {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  function ColorlibStepIcon(props) {
    const lib = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
      1: <PetsIcon />,
      2: <PetsIcon />,
      3: <PetsIcon />,
      4: <PetsIcon />,
      5: <PetsIcon />,
    };

    return (
      <div
        className={clsx(lib.root, {
          [lib.active]: active,
          [lib.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  return (
    <Formik
      initialValues={petInitialInfo}
      // validationSchema={petValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form id={formId}>
          <Grid container direction="column" justify="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                value={labels[activeStep]}
              >
                {labels[activeStep]}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              {/* <TestStepper /> */}

              <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>

            <Grid
              item
              container
              justify="flex-start"
              className={classesForm.contentModal}
            >
              {renderStepContent(activeStep, values)}
            </Grid>
            <Grid
              item
              container
              xs={12}
              justify="flex-end"
              spacing={1}
              direction="row"
              className={classes.groupButtons}
            >
              {activeStep !== 0 && (
                <Grid item>
                  <Button
                    onClick={handleBack}
                    className={classes.buttons}
                    variant="contained"
                  >
                    Voltar
                  </Button>
                </Grid>
              )}
              <Grid item className={classes.wrapper}>
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
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
