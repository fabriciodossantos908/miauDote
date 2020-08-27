import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, SelectField } from '../../FieldStyle';
import PetsIcon from '@material-ui/icons/Pets';

import { SelectIconField } from '../FieldStyle';
import { IconRadioButton } from '../../FieldStyle';
import { Field } from 'formik';

const sex = [
  {
    value: undefined,
    label: 'Selecione',
  },
  {
    value: 'F',
    label: 'Fêmea',
  },
  {
    value: 'M',
    label: 'Macho',
  },
  {
    value: 'O',
    label: 'Não sei',
  },
];

const specie = [
  {
    value: undefined,
    label: 'Selecione',
  },
  {
    value: 'dog',
    label: 'Cachorro',
    icon: <PetsIcon />,
  },
  {
    value: 'cat',
    label: 'Gato',
    icon: <PetsIcon />,
  },
  {
    value: 'bird',
    label: 'Pássaro',
  },
];

export default function PetInfo(props) {
  const {
    formField: { especie, porte, sexo, raca },
  } = props;
  return (
    <React.Fragment>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={12}>
          <Typography variant="h6">Porte do pet</Typography>
        </Grid>
        <Grid item xs={12}>
          <Field
            name={porte.name}
            options={['P', 'M', 'G']}
            component={IconRadioButton}
          />
        </Grid>
      </Grid>
      <Grid item container justify="space-between">
        <Grid item xs={12}>
          <Grid item xs={4}>
            <SelectIconField
              name={especie.name}
              label={especie.label}
              data={specie}
              fullWidth
            ></SelectIconField>
          </Grid>
          <Grid xs={4}>
            <SelectField
              name={sexo.name}
              variant="outlined"
              label={sexo.label}
              data={sex}
              fullWidth
            />
          </Grid>
          <Grid xs={4}>
            <InputField name={raca.name} variant="outlined" label={raca.name} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
