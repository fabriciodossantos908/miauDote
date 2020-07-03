import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField } from '../../FieldStyle';


// Tell about this. Create the user option to define if the per was founded or are of himself

export default function PetAddress(props) {
  const classes = props.useStyle()

  const {
    formField: {
      cep,
      uf,
      cidade
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
        <InputField name={cep.name} variant="outlined" label={cep.label}  fullWidth />
        <InputField name={uf.name} variant="outlined" label={uf.label}  fullWidth />
        <InputField name={cidade.name} variant="outlined" label={cidade.label}  fullWidth />
         {/* <InputField name={longitude.name} variant="outlined" label={longitude.label} fullWidth /> */}
      </Grid>
    </React.Fragment>
  );
}
