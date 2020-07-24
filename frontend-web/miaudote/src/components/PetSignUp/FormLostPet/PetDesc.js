import React from 'react';
import { Grid, TextareaAutosize, makeStyles } from '@material-ui/core';
import { InputField } from '../../FieldStyle';
import { TextInputFild } from '../../FieldStyle';

import { Field } from 'formik';
import { theme } from '../../Layout/styles';

const useStyles = makeStyles((theme) => ({
  textArea: {
    maxWidth: 450,
    margin: 0,
  },
}));

export default function PetDesc(props) {
  const classes = props.useStyle();
  const {
    formField: { nome, descricao },
  } = props;

  return (
    <>
      <Grid item container direction="row" style={{ height: 60, margin: 0 }}>
        <Grid item xs={12}>
          <InputField name={nome.name} variant="outlined" label={nome.name} />
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item xs={12}>
          <TextInputFild
            style={{ width: 450, margin: 0, height: 130 }}
            name={descricao.name}
            variant="outlined"
            rowsMin={4}
            placeholder="Digite sua descrição"
          />
        </Grid>
      </Grid>
    </>
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
