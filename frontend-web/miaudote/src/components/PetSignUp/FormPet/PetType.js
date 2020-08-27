import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FieldStyle';
import PetsIcon from '@material-ui/icons/Pets';

import { SelectIconField } from '../FieldStyle';
import { IconRadioButton } from '../../FieldStyle';
import { Field } from 'formik';

const specie = [
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
    formField: { especie, porte, cor, raca },
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
        <Grid item>
          <Grid>
            <SelectIconField
              name={especie.name}
              label={especie.label}
              data={specie}
              fullWidth
            ></SelectIconField>
          </Grid>
          <Grid>
            <InputField
              variant="outlined"
              name={raca.name}
              label={raca.label}
              fullWidth
            ></InputField>
          </Grid>
          <Grid>
            <InputField
              variant="outlined"
              name={cor.name}
              label={cor.label}
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
