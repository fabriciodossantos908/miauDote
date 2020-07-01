import React from 'react';
import { Grid, Typography, Paper, Container } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FieldStyle';


// Tell about this. Create the user option to define if the per was founded or are of himself

export default function PetAddress(props) {
  const classes = props.useStyle()
  const {
    formField: {
      localizacao,
      url_foto,
      id_usuario,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} justify="flex-end">
        <Container item xs={6} sm={6} className={classes.inputPaper}>
            <InputField name={id_usuario.name} label={id_usuario.label} fullWidth />
            {/* <InputField name={localizacao.name} label={localizacao.label} fullWidth /> */}
        </Container>
      </Grid>
    </React.Fragment>
  );
}
