import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField } from '../../FieldStyle';
import { SelectField } from '../../FieldStyle'

const sex = [
  {
    value: "F",
    label: 'Feminino'
  },
  {
    value: "M",
    label: 'Masculino'
  }
]


export default function PetInfo(props) {
  const classes = props.useStyle();

  const {
    formField: {
      nome,
      idade,
      sexo,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid
        container
        xs={10}
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.inputPaper}
      >
        <InputField name={nome.name} variant="outlined" label={nome.label} fullWidth />
        <InputField name={idade.name} variant="outlined" label={idade.label} fullWidth />
        <SelectField
          name={sexo.name}
          variant="outlined"
          label={sexo.label}
          data={sex}
          fullWidth
        />
      </Grid>
    </React.Fragment>
  );
}
