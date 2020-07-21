import React from 'react';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { InputField } from '../../FieldStyle';

import { SelectSexType } from '../FieldStyle/';

export default function PetInfo(props) {
  const [checkedYear, setCheckedYear] = React.useState(true);
  const [checkedMonth, setCheckedMonth] = React.useState(true);

  const handleChangeYear = () => {
    setCheckedYear((prev) => !prev);
  };

  const handleChangeMonth = () => {
    setCheckedMonth((prev) => !prev);
  };

  const {
    formField: {
      nome,
      // idade,
      // raca,
      sexo,
      anos,
      meses,
    },
  } = props;
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <InputField
          name={nome.name}
          variant="outlined"
          label={nome.label}
          fullWidth
        />
      </Grid>
      <Grid item container orientation="row">
        <Grid
          item
          container
          xs={6}
          justify="center"
          direction="row"
          spacing={1}
        >
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox disableFocusRipple onChange={handleChangeYear} />
              }
              label="Anos"
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              name={anos.name}
              disabled={checkedYear}
              variant="outlined"
              label={anos.label}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={6}
          justify="center"
          direction="row"
          spacing={1}
        >
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox disableFocusRipple onChange={handleChangeMonth} />
              }
              label="Meses"
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              name={meses.name}
              disabled={checkedMonth}
              variant="outlined"
              label={meses.label}
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <SelectField
        name={sexo.name}
        variant="outlined"
        label={sexo.label}
        data={sex}
        fullWidth
      /> */}

      <SelectSexType name={sexo.name} label={sexo.label} />
    </React.Fragment>
  );
}
