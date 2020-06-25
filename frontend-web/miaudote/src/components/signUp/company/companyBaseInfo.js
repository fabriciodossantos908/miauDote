import React, { Component } from 'react'
import { makeStyles, TextField, Paper, Grid, InputLabel, Box, Button } from '@material-ui/core';

export class companyBaseInfo extends Component {
  render() {
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        }
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginTop: 100,
        maxWidth: 800,
        minHeight: 500
      },
    }))
    
    return (
      <div className={useStyles.root}>
        <Paper className={useStyles.paper}>
          <Grid container spacing={2}>

            <Grid
              xs={4}
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >            <Box item xs={3} sm container color="" >
            <h1>Sign up empresa</h1>
              </Box>
            </Grid>
            <Grid
              xs
              container
              direction="column"
              justify="flex-end"
              alignItems="center"
            >
              <TextField requied label="Email" variant="outlined" />
              <TextField required label="Senha" variant="outlined" />
              <TextField required label="Repita sua senha" variant="outlined" />

              <Button variant="con  tained" color="primary">Avançar</Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );

  }

}

export default companyBaseInfo
