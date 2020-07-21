import React from 'react';
import { Grid } from '@material-ui/core';
import { InputField } from '../../../FieldStyle';

export default function FormUserInitialInfo(props) {
  const classes = props.useStyle();
  const {
    formField: { nome, email, senha, senha_confirm },
  } = props;
  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.inputPaper}>
        <InputField
          name={nome.name}
          variant="outlined"
          label={nome.label}
          justify="flex-start"
          focus={true}
          fullWidth
          style={{ marginBottom: 10 }}
        />
      </Grid>

      <Grid item xs={12} className={classes.inputPaper}>
        <InputField
          name={email.name}
          variant="outlined"
          label={email.label}
          fullWidth
          style={{ marginBottom: 10 }}
        />
      </Grid>

      <Grid item className={classes.inputPaper}>
        <InputField
          type="password"
          name={senha.name}
          variant="outlined"
          label={senha.label}
          justify="flex-start"
          fullWidth
          secureTextEntry
          style={{ marginBottom: 10 }}
        />
      </Grid>

      <Grid item className={classes.inputPaper}>
        <InputField
          type="password"
          name={senha_confirm.name}
          variant="outlined"
          label={senha_confirm.label}
          justify="flex-start"
          fullWidth
          secureTextEntry
        />
      </Grid>
    </React.Fragment>
  );
}
