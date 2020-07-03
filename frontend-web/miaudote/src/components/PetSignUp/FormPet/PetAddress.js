import React from 'react';
import { Grid, Typography, Paper, Container, Checkbox } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FieldStyle';


// Tell about this. Create the user option to define if the per was founded or are of himself

export default function PetAddress(props) {
  const classes = props.useStyle()

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const {
    formField: {
      cep,
      longitude,
      latitude
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
        {/* <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        /> */}
        <InputField name={cep.name} variant="outlined" label={cep.label} disable="true" fullWidth />
        {/* <InputField name={longitude.name} variant="outlined" label={longitude.label} fullWidth /> */}
        {/* <InputField name={latitude.name} variant="outlined" label={latitude.label} fullWidth /> */}
      </Grid>
    </React.Fragment>
  );
}
