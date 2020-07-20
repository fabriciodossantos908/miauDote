import React from 'react';
import { Grid, FormControl, Typography, RadioGroup, FormControlLabel, Radio, Checkbox } from '@material-ui/core';
import { InputField } from '../../FieldStyle';

import { BtnSituation, SelectYesNo } from '../FieldStyle'
import { Field } from 'formik';

export default function PetDesc(props) {
  const classes = props.useStyle()
  const {
    formField: {
      descricao,
      castrado,
      vacinado,
      vermifungado,
      cuidados_veterinarios,
    }
  } = props;

  const situation = {
    cuidados_veterinarios,
    vermifungado,
    castrado
  }

  return (
    <React.Fragment>
      <Grid>
        <Grid>
          <InputField name={descricao.name} label={descricao.name} />
        </Grid>
        <Grid item container justify="flex-start" direction="column">
          <Grid item container direction="row">
            <Grid item xs={6}>
              <Typography
                variant="h8"
              >
                Está castrado ?
            </Typography>
            </Grid>
            <Grid item xs={6}>
              <Field name={castrado.name} type="checkbox" as={Checkbox} />
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={6}>
              <Typography
                variant="h8"
              >
                Está vacinado ?
            </Typography>
            </Grid>
            <Grid item xs={6}>
              <Field name={vacinado.name} type="checkbox" as={Checkbox} />
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={6}>
              <Typography
                variant="h8"
              >
                Está vermifungado ?
            </Typography>
            </Grid>
            <Grid item xs={6}>
              <Field name={vermifungado.name} type="checkbox" as={Checkbox} />
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={6}>
              <Typography
                variant="h8"
              >
                Precisa de cuidados veterinários ?
            </Typography>
            </Grid>
            <Grid item xs={6}>
              <Field name={cuidados_veterinarios.name} type="checkbox" as={Checkbox} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


// import React, { Component } from 'react'
// import { makeStyles, TextField, Paper, Grid, InputLabel, Box, Button } from '@material-ui/core';

// export class companyPersonalInfo extends Component {

//     // Going to the next step with all saved
//     continue = e => {
//         e.preventDefault();
//         this.props.nextStep();
//     }

//     companytype = () => {
//         const service = this.seachType
//         service()
//     }

//     render() {
//         const useStyles = makeStyles((theme) => ({
//             root: {
//               flexGrow: 1,
//               '& .MuiTextField-root': {
//                 margin: theme.spacing(1),
//                 width: '25ch',
//               }
//             },
//             paper: {
//               padding: theme.spacing(2),
//               margin: 'auto',
//               marginTop: 100,
//               maxWidth: 800,
//               minHeight: 500
//             },
//           }));

//           const classes = useStyles()

//         return (
//             <div className={classes.root}>
//             <Paper className={classes.paper}>
//               <Grid container spacing={2}>
//                 <Grid
//                 xs={4}
//                   container
//                   direction="column"
//                   justify="center"
//                   alignItems="flex-start"
//                 >            <Box item xs={3} sm container color="" >
//                     <InputLabel>Teste</InputLabel>
//                   </Box>
//                 </Grid>
//                 <Grid
//                   xs
//                   container
//                   direction="column"
//                   justify="flex-end"
//                   alignItems="center"
//                 >          

//                     <TextField label="Outlined" variant="outlined" />
//                     <TextField label="Outlined" variant="outlined" />
//                     <TextField label="Outlined" variant="outlined" />
//                     <TextField label="Outlined" variant="outlined" />

//                     <Button variant="contained" color="primary">Avançar</Button>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </div>
//               )
//     }
// }

// export default companyPersonalInfo
