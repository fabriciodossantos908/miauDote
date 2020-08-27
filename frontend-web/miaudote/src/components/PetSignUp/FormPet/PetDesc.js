import React from 'react';
import { Grid, Typography, Checkbox } from '@material-ui/core';
import { TextInputFild } from '../../FieldStyle';
import { Field } from 'formik';

export default function PetDesc(props) {
  const {
    formField: {
      descricao,
      castrado,
      vacinado,
      vermifungado,
      cuidados_veterinarios,
    },
  } = props;

  //   const situation = {
  //     cuidados_veterinarios,
  //     vermifungado,
  //     castrado,
  //   };

  return (
    <React.Fragment>
      <Grid>
        <Grid item container direction="row">
          <Grid item xs={12}>
            <TextInputFild
              style={{ width: 450, margin: 0, height: 100 }}
              name={descricao.name}
              variant="outlined"
              rowsMin={4}
              placeholder="Digite sua descrição"
            />
          </Grid>
        </Grid>
        <Grid item container justify="flex-start" direction="column">
          <Grid item container direction="row">
            <Grid item xs={6}>
              <Typography variant="h8">Está castrado ?</Typography>
            </Grid>
            <Grid item xs={6}>
              <Field name={castrado.name} type="checkbox" as={Checkbox} />
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={6}>
              <Typography variant="h8">Está vacinado ?</Typography>
            </Grid>
            <Grid item xs={6}>
              <Field name={vacinado.name} type="checkbox" as={Checkbox} />
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={6}>
              <Typography variant="h8">Está vermifungado ?</Typography>
            </Grid>
            <Grid item xs={6}>
              <Field name={vermifungado.name} type="checkbox" as={Checkbox} />
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={6}>
              <Typography variant="h8">
                Precisa de cuidados veterinários ?
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Field
                name={cuidados_veterinarios.name}
                type="checkbox"
                as={Checkbox}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
