import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';
import { useField } from 'formik';

export default function TypePetRegister(props) {
  const {
    formField: { adocao, perdido },
  } = props;
  const [value, setValue] = React.useState('adocao');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Typography variant="h5">Ele está sendo cadastrado:</Typography>
      <RadioGroup
        aria-label="typePet"
        name="typePet"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="adocao"
          control={<Radio />}
          label={adocao.label}
        />
        <FormControlLabel
          value="perdido"
          control={<Radio />}
          label={perdido.label}
        />
      </RadioGroup>
    </FormControl>
  );
}
