import React, { Component } from 'react'
import { TextField, Paper, Grid, InputLabel, Box, Button } from '@material-ui/core';


export class companyAddress extends Component {
    render() {
          const classes = this.props.useStyles

        return (
            <div>
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
      
                    <TextField label="Cep" variant="outlined"  />
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Outlined" variant="outlined" />
      
                    <Button variant="contained" color="primary">Avançar</Button>
                </Grid>
              </Grid>
            </Paper>
          </div>

            </div>
        )
    }
}

export default companyAddress

