import React from 'react';
import { at, isEmpty } from 'lodash';
import { useField } from 'formik';

import { TextField, TextareaAutosize } from '@material-ui/core';

export default function TextInputFild(props) {
  const { errorText, type, focus, disabled, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextareaAutosize
      type={isEmpty(type) ? 'text' : type}
      autoFocus={focus === true ? true : false}
      error={meta.touched && meta.error && true}
      disabled={disabled === true ? true : false}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
