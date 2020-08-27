import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Typography } from '@material-ui/core';
import { Field } from 'formik';

export default function SelectSexType(props) {
  const { label, data, ...rest } = props;
  const [value, setValue] = React.useState('U');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl {...rest} component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={value}
        onChange={handleChange}
      >
        <Grid container jutify="flex-start" orientation="column">
          <Grid item xs={4}>
            <Field value="F" as={Radio} label="Feminino" />
          </Grid>
          <Grid item xs={4}>
            <Typography>Feminino</Typography>
          </Grid>
          <Grid item xs={4}>
            <Field value="M" as={Radio} label="Masculino" />
          </Grid>

          <Grid item xs={4}>
            <Typography>Masculino</Typography>
          </Grid>

          <Grid item xs={4}>
            <Field value="U" as={Radio} label="Não sei" />
          </Grid>

          <Grid item xs={4}>
            <Typography>Não sei</Typography>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
