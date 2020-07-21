import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

function SelectYesNo(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;

  const [value, setValue] = React.useState('unknow');

  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid>
      {data.map((item, index) => (
        <FormControl {...rest} error={isError}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} value={selectedValue ? selectedValue : ''}>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={value}
              onChange={handleChange}
            >
              <Grid container jutify="flex-start" orientation="column">
                <Grid item xs={12}>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Sim"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="Não"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          </Select>

          {_renderHelperText()}
        </FormControl>
      ))}
    </Grid>
  );
}

SelectYesNo.defaultProps = {
  data: [],
};

SelectYesNo.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SelectYesNo;
