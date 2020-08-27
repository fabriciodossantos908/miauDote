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

import checkoutPetModal from '../lostPetModel/checkoutPetModel';
import petInitialInfo from '../lostPetModel/petInitialValues';

import PetPhoto from '../FormLostPet/PetPhoto';

import { useStyle, useColorlibStepIconStyles } from '../../Layout/styles';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const steps = [
  'Localização',
  'Descrição do pet',
  'Tipo do seu pet',
  'Foto do seu pet',
];
const labels = [
  'Quando que você o viu pela ultima vez?',
  'Pode descrever suas características?',
  'Como é seu pet?',
];
const { formId, formField } = checkoutPetModal;

function renderStepContent(step, values) {
  switch (step) {
    case 0:
      return (
        <PetAddress formField={formField} values={values} useStyle={useStyle} />
      );
    case 1:
      return <PetDesc formField={formField} useStyle={useStyle} />;
    case 2:
      return <PetType formField={formField} useStyle={useStyle} />;
    case 3:
      return <PetPhoto values={values} type={'adoption'} useStyle={useStyle} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutCompanyStep() {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 2;
  const created = activeStep === steps.length - 1;

  const history = useHistory();

  async function submitForm(values, actions) {
    const USER_TOKEN = localStorage.getItem('token');
    const USER_ID = localStorage.getItem('id');
    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    values.id_usuario = USER_ID;
    values.data = values.data.split('/').reverse().join('-');
    values.hora = values.hora.split(':').reverse().join('-');
    Axios.post(
      'http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets_perdidos',
      values,
      { headers: { Authorization: AuthStr } },
    )
      .then(function (response) {
        localStorage.setItem('id-losted', response.data.id);
      })
      .catch(function (error) {
        alert('ops! erro ao cadastrar');
        console.log(error);
      });

    setActiveStep(activeStep + 1);
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

            <Grid item container justify="flex-start">
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
                  onClick={() => {
                    created
                      ? history.push('/petLost')
                      : console.log('wait a sec');
                  }}
                >
                  {created ? 'Cadastrar' : 'Próximo'}
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
