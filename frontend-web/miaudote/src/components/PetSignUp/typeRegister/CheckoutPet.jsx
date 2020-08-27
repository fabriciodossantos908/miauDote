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

import PetInfo from '../FormPet/PetInfo';
import PetType from '../FormPet/PetType';
import PetDesc from '../FormPet/PetDesc';
import PetAddress from '../FormPet/PetAddress';

// import petValidationSchema from '../PetModel/PetValidationSchema';
import checkoutPetModal from '../PetModel/checkoutPetModel';
import petInitialInfo from '../PetModel/petInitialValues';

import {
  useStyle,
  formBase,
  useColorlibStepIconStyles,
} from '../../Layout/styles';
import Axios from 'axios';
import PetPhoto from '../FormPet/PetPhoto';
import { useHistory } from 'react-router-dom';
// import TestStepper from '../../pages/testStepper';
// import { useHistory } from 'react-router-dom';

const steps = [
  'Informações iniciais',
  'Descrição do pet',
  'Tipo do seu pet',
  'Localização do pet',
  'Foto do pet',
];
const { formId, formField } = checkoutPetModal;

function renderStepContent(step, values) {
  switch (step) {
    case 0:
      return <PetInfo formField={formField} useStyle={useStyle} />;
    case 1:
      return <PetDesc formField={formField} useStyle={useStyle} />;
    case 2:
      return <PetType formField={formField} useStyle={useStyle} />;
    case 3:
      return (
        <PetAddress formField={formField} values={values} useStyle={useStyle} />
      );
    case 4:
      return <PetPhoto values={values} type={'losted'} useStyle={useStyle} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutCompanyStep() {
  const classes = useStyle();
  const classesForm = formBase();
  const [activeStep, setActiveStep] = useState(0);
  // const [createStatus, setCreacteStatus] = useState(false);
  //   const currentValidationSchema = petValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 2;
  const created = activeStep === steps.length - 1;

  const history = useHistory();

  // function _sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  async function submitForm(values, actions) {
    const USER_TOKEN = localStorage.getItem('token');
    const USER_ID = localStorage.getItem('id');
    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    values.id_usuario = USER_ID;

    Axios.post(
      'http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets',
      values,
      { headers: { Authorization: AuthStr } },
    )
      .then(function (response) {
        localStorage.setItem('pet-id', response.data.id);
        // console.log(response);
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
      //   validationSchema={petValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form id={formId}>
          <Grid container direction="column" justify="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center" value={steps[activeStep]}>
                {steps[activeStep]}
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

            <Grid item className={classesForm.contentModal}>
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
                  onClick={() => {
                    created ? history.push('/pet') : console.log('wait a sec');
                  }}
                  className={classes.buttons}
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
