import React from 'react';
import {
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { InputField } from '../../FieldStyle';
import PetsIcon from '@material-ui/icons/Pets';

import { SelectIconField } from '../FieldStyle';
import ImageField from '../../../pages/utils/fields/ImageField';
import { IconRadioButton } from '../../FieldStyle';
import { Field } from 'formik';

const useStyle = makeStyles({
  fontBase: {
    fontSize: 10,
  },
});

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
  const classes = props.useStyle();
  const classesPet = useStyle();

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
            <InputField name={sexo.name} variant="outlined" label={sexo.name} />
          </Grid>
          <Grid xs={4}>
            <InputField name={raca.name} variant="outlined" label={raca.name} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
