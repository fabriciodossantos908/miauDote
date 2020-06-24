import React from 'react';
import { makeStyles, TextField, Paper, Grid, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    minHeight: 500
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid bgcolor="primary.main" container spacing={2}>
          <Grid item xs={12} sm container>
            <TextField id="standard-basic" label="Standard" />
          </Grid>
          <Grid item xs={12} sm container>
            <InputLabel bgcolor="primary.main">Teste</InputLabel>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
