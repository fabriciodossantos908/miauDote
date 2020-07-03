import React from 'react';
import { Grid, RadioGroup, FormControlLabel, Radio, Typography, makeStyles } from '@material-ui/core';
import { InputField } from '../../FieldStyle';
import PetsIcon from '@material-ui/icons/Pets';

import { SelectIconField } from '../FieldStyle'

const useStyle = makeStyles({
  fontBase: {
    fontSize: 10
  }
})

const specie = [
  {
    value: "dog",
    label: 'Cachorro',
    icon: <PetsIcon/>
  },
  {
    value: "cat",
    label: 'Gato',
    icon: <PetsIcon/>
  },
  {
    value: "bird",
    label: 'Pássaro'
  },

]

export default function PetInfo(props) {
  const classes = props.useStyle();
  const classesPet = useStyle();

  const {
    formField: {
      especie,
      porte,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid
        container
        xs={10}
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.inputPaper}
      >
        <Typography variant="h8">Porte do pet</Typography>
        <RadioGroup row>
          <FormControlLabel value="pequeno"
            control={<Radio checkedIcon={<PetsIcon fontSize="small" />}
              icon={<PetsIcon fontSize="small" />} />}
            className={classesPet.fontBase}
            label="Pequeno"
            labelPlacement="bottom"
          />
          <FormControlLabel value="medio"
            control={<Radio checkedIcon={<PetsIcon />}
              icon={<PetsIcon />} />}
            className={classesPet.fontBase}
            label="Médio"
            labelPlacement="bottom"
          />

          <FormControlLabel value="grande"
            control={<Radio checkedIcon={<PetsIcon fontSize="large" />}
              icon={<PetsIcon fontSize="large" />} />}
            className={classesPet.fontBase}
            label="Grande"
            labelPlacement="bottom"
          />
        </RadioGroup>
        <SelectIconField
        name={especie.name} label={especie.label} data={specie} fullWidth
        ></SelectIconField>
      </Grid>
    </React.Fragment>
  );
}
