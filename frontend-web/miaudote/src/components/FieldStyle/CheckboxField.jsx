import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

export default function CheckboxField(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function onChange(e) {
    setValue(e.target.checked);
  }

  return (
    <FormControl {...rest}>
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={<Checkbox {...field} onChange={onChange} />}
        label={label}
      />
      {renderHelperText()}
    </FormControl>
  );
}
