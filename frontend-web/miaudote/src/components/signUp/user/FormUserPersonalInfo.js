import React, { Component } from 'react'
import { makeStyles, TextField, Paper, Grid, InputLabel, Box, Button } from '@material-ui/core';

export default class pesonalData extends Component {
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
          }));

          const classes = useStyles()

        return (
            <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid
                xs={4}
                  container
                  direction="column"
                  justify="center"
                  alignItems="flex-start"
                >            <Box item xs={3} sm container color="" >
                    <InputLabel>Teste</InputLabel>
                  </Box>
                </Grid>
                <Grid
                  xs
                  container
                  direction="column"
                  justify="flex-end"
                  alignItems="center"
                >          
      
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Outlined" variant="outlined" />
      
                    <Button variant="contained" color="primary">Avançar</Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
              )
    }
}
