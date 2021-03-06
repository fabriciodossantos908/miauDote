import React from 'react';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { InputField, SelectField } from '../../FieldStyle';

// import { SelectSexType } from '../FieldStyle/';

export default function PetInfo(props) {
  //   const [checkedYear, setCheckedYear] = React.useState(true);
  //   const [checkedMonth, setCheckedMonth] = React.useState(true);

  //   const handleChangeYear = () => {
  //     setCheckedYear((prev) => !prev);
  //   };

  //   const handleChangeMonth = () => {
  //     setCheckedMonth((prev) => !prev);
  //   };

  const sex = [
    {
      value: undefined,
      label: 'Selecione',
    },
    {
      value: 'F',
      label: 'Fêmea',
    },
    {
      value: 'M',
      label: 'Macho',
    },
    {
      value: 'O',
      label: 'Não sei',
    },
  ];

  const {
    formField: {
      nome,
      // idade,
      // raca,
      sexo,
      idade,
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
      <Grid item xs={5}>
        <InputField
          name={idade.name}
          variant="outlined"
          label={idade.label}
          fullWidth
        />
      </Grid>
      <Grid xs={5}>
        <SelectField
          name={sexo.name}
          variant="outlined"
          label={sexo.label}
          data={sex}
          fullWidth
        />
      </Grid>
      {/* <SelectSexType name={sexo.name} label={sexo.label} /> */}
    </React.Fragment>
  );
}
