import React from 'react';
import { Grid, RadioGroup, FormControlLabel, Radio, Typography, makeStyles } from '@material-ui/core';
import { InputField } from '../../FieldStyle';
import PetsIcon from '@material-ui/icons/Pets';

import { SelectIconField } from '../FieldStyle'
import ImageField from '../../../pages/utils/fields/ImageField';

const useStyle = makeStyles({
  fontBase: {
    fontSize: 10
  }
})

const specie = [
  {
    value: "dog",
    label: 'Cachorro',
    icon: <PetsIcon />
  },
  {
    value: "cat",
    label: 'Gato',
    icon: <PetsIcon />
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
      cor
    }
  } = props;
  return (
    <React.Fragment>
      <Grid item container justify="center" alignItems="center" direction="column">
        <Grid item xs={12}>
          <Typography variant="h6">Porte do pet</Typography>
        </Grid>
        <Grid item xs={12}>
          <RadioGroup row>
            <FormControlLabel value="pequeno"
              control={<Radio checkedIcon={<PetsIcon fontSize="small" />}
                icon={<PetsIcon fontSize="small" />} />}
              className={classesPet.fontBase}
              label="Pequeno"
              name={porte}
              labelPlacement="bottom"
            />
            <FormControlLabel value="medio"
              control={<Radio checkedIcon={<PetsIcon />}
                icon={<PetsIcon />} />}
              className={classesPet.fontBase}
              label="Médio"
              name={porte}
              labelPlacement="bottom"
            />

            <FormControlLabel value="grande"
              control={<Radio checkedIcon={<PetsIcon fontSize="large" />}
                icon={<PetsIcon fontSize="large" />} />}
              className={classesPet.fontBase}
              label="Grande"
              name={porte}
              labelPlacement="bottom"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid item container justify="space-between">
        <Grid item xs={5}>
          <Typography
            variant="h6"
            align="center"
          >
            Coloque uma foto de seu pet aqui
          </Typography>
          <ImageField />
        </Grid>
        <Grid item>
          <Grid>
            <SelectIconField
              name={especie.name} label={especie.label} data={specie} fullWidth
            ></SelectIconField>
          </Grid>
          <Grid>
            <InputField variant="outlined" name={cor.name} label={cor.label} fullWidth />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
