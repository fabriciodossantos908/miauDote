import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PetsIcon from '@material-ui/icons/Pets';

const FormikRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  options,
  ...props
}) => {
  const fieldName = name || field.name;

  //   const { test } = props;

  return (
    <React.Fragment>
      <RadioGroup {...field} {...props} name={fieldName}>
        {options.map((option) => (
          <FormControlLabel
            value={option}
            control={<Radio checkedIcon={<PetsIcon />} icon={<PetsIcon />} />}
            label={option}
          />
        ))}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <React.Fragment>{errors[fieldName]}</React.Fragment>
      )}
    </React.Fragment>
  );
};

export default FormikRadioGroup;
