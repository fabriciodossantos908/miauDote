import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect, getIn } from 'formik';
import MaskedInput from 'react-text-mask';

// import i18next from './i18next';

/**
 * Used to bind TextField with MaskedInput.
 * @see https://material-ui.com/demos/text-fields/#formatted-inputs
 */
// const getMaskedInput = (mask) => ({ inputRef, ...other }) => (
//   <MaskedInput {...other} ref={inputRef} mask={mask} guide={false} />
// );

/**
 * Mimics the logic of `formik-material-ui/TextField`.
 * Integrate YUP errors with i18Next tranlations.
 * `formik-material-ui/TextField` was causing the same bug to happen on every component.
 * @see https://github.com/stackworx/formik-material-ui/blob/master/src/TextField.tsx
 */
const parseFormikData = (formik, name) => {
  let outputProps = {};
  if (formik.values && name) {
    // const fieldValue = getIn(formik.values, name);
    const fieldError = getIn(formik.errors, name);
    const fieldTouched = getIn(formik.touched, name);
    const showError = fieldTouched && Boolean(fieldError);

    outputProps = {
      error: showError,
      helperText: showError ? fieldError : '',
    };
  }
  return outputProps;
};

const Input = ({ formik, mask = [], ...props }) => (
  <MaskedInput
    mask={mask}
    name={props.name}
    variant="outlined"
    value={formik.values[props.name]}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    guide={false}
    render={(ref, innerProps) => (
      <TextField
        label={props.label}
        fullWidth={props.fullWidth}
        {...parseFormikData(formik, props.name)}
        {...innerProps}
        inputRef={ref}
      />
    )}
  />
);

export default connect(Input);
