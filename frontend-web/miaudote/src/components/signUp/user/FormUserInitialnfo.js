import React, { Component } from 'react'
import { TextField, Paper, Grid, InputLabel, Box, Button } from '@material-ui/core';

export default class FormUserInitialInfo extends Component {
    render() {
          console.log(this.props.useStyles())
          const classes = this.props.useStyles
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
                  container="true"
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
