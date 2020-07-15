import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { theme } from '../components/Layout/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function Test() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{backgroundColor: theme.palette.primary.main}} elevation={3} >primaria main</Paper>
      <Paper style={{backgroundColor: theme.palette.primary.light}} elevation={3} >primaria light</Paper>
      <Paper style={{backgroundColor: theme.palette.primary.dark}} elevation={3} >primaria dark</Paper>
      <Paper style={{backgroundColor: theme.palette.secondary.main}} elevation={3} >Secundaria main</Paper>
      <Paper style={{backgroundColor: theme.palette.secondary.light}} elevation={3} >Secundaria light</Paper>
      <Paper style={{backgroundColor: theme.palette.secondary.dark}} elevation={3} >Secundaria dark</Paper>
    </div>
  );
}
