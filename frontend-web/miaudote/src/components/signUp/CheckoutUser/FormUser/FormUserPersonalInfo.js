import React from 'react';
import { Grid, Fade } from '@material-ui/core';
import { SelectField } from '../../../FieldStyle';
import Input from '../../../SignIn/Input';

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
          <Input
            name={celular.name}
            label={celular.label}
            mask={[
              '(',
              /\d/,
              /\d/,
              ')',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            fullWidth
          />
        </Grid>
      </Fade>
      <Fade timeout={600} in={active}>
        <Grid item className={classes.inputPaper}>
          <Input
            name={data_nascimento.name}
            label={data_nascimento.label}
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            fullWidth={true}
          />
        </Grid>
      </Fade>
      <Fade timeout={700} in={active}>
        <Grid item className={classes.inputPaper}>
          <Input
            name={cpf.name}
            label={cpf.label}
            mask={[
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
            ]}
            fullWidth={true}
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
