import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

export default function InputField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);
<<<<<<< HEAD

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
=======
  // console.log("that's the meta -->  " + JSON.stringify(meta))
 


    function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');

>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}