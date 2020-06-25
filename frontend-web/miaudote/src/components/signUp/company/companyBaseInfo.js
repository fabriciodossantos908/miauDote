import React from 'react';
import { makeStyles, Paper, Grid, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  colors : {
    baseBlue : '#2222222'
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: 100,
    maxWidth: 1000,
    minHeight: 500
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid  container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid bgcolor="primary.main" item xs={6} sm container>
            <InputLabel bgcolor="primary.main">Teste</InputLabel>
          </Grid>
          </Grid>
          <Grid item xs={6} sm container>
            <InputLabel bgcolor="colors.baseBlue">Teste</InputLabel>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
