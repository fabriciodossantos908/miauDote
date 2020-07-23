import React from 'react';
import { Grid, Paper, Slide, Fade } from '@material-ui/core';
import { InputField, SelectField } from '../../../FieldStyle';

const data = [
  {
    value: undefined,
    label: 'Selecione',
  },
  {
    value: 'F',
    label: 'Femino',
  },
  {
    value: 'M',
    label: 'Masculino',
  },
  {
    value: 'O',
    label: 'Outros',
  },
  {
    value: 'N',
    label: 'Não informar',
  },
];

export default function FormUserPersonalInfo(props) {
  const classes = props.useStyle();
  const {
    formField: { celular, sexo, data_nascimento, cpf },
  } = props;
  const { active } = props;
  return (
    <React.Fragment>
      <Fade timeout={500} in={active}>
        <Grid item className={classes.inputPaper}>
          <InputField
            name={celular.name}
            variant="outlined"
            label={celular.label}
            fullWidth
          />
        </Grid>
      </Fade>
      <Fade timeout={600} in={active}>
        <Grid item className={classes.inputPaper}>
          <InputField
            name={data_nascimento.name}
            variant="outlined"
            label={data_nascimento.label}
            fullWidth
          />
        </Grid>
      </Fade>
      <Fade timeout={700} in={active}>
        <Grid item className={classes.inputPaper}>
          <InputField
            name={cpf.name}
            variant="outlined"
            label={cpf.label}
            fullWidth
          />
        </Grid>
      </Fade>
      <Fade timeout={800} in={active}>
        <Grid item className={classes.inputPaper}>
          <SelectField
            name={sexo.name}
            data={data}
            label={sexo.label}
            fullWidth
          />
        </Grid>
      </Fade>
    </React.Fragment>
  );
}
