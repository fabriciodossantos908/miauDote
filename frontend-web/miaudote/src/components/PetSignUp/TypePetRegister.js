import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';
import { useField } from 'formik';

import CheckoutPet from '../PetSignUp/typeRegister/CheckoutPet'
import { isEmpty } from 'lodash';

export default function TypePetRegister() {
  const [value, setValue] = React.useState();
  const [selected, setSelected] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {value === 'perdido' ?
        <CheckoutPet />

        : console.log("false")}
      {selected === false ? (
        <FormControl component="fieldset">
          <Typography
            variant="h5"
          >Ele está sendo cadastrado:</Typography>
          <RadioGroup aria-label="typePet" name="typePet" value={value} onChange={handleChange}>
            <FormControlLabel value="adocao" control={<Radio />} label="Adoção" />
            <FormControlLabel value="perdido" control={<Radio />} label="Perdido" />
          </RadioGroup>
        </FormControl>
      ) : <></>}
    </>
  );
}
