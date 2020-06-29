import React from 'react';
import { Grid, Typography, Paper, Container } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FieldStyle';

export default function companyPersonalInfo(props) {
  const classes = props.useStyle()
  const {
    formField: {
      telefone,
      id_tipo_servico,
      celular_representante,
      razao_social,
      nome_empresa,
      cnpj,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} justify="flex-end">
        <Container item xs={6} sm={6} className={classes.inputPaper}>
            <InputField name={celular_representante.name} label={celular_representante.label} />
            <InputField name={razao_social.name} label={razao_social.label} />
            <InputField name={nome_empresa.name} label={nome_empresa.label} />
            <InputField name={cnpj.name} label={cnpj.label} />
            <InputField name={telefone.name} label={telefone.label} />
            <InputField name={id_tipo_servico.name} label={id_tipo_servico.label} />
        </Container>
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
