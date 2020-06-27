import React from 'react';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './styles.js'
import {Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';


export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item container xs={12} direction="row" className={classes.base}>
        <Grid item xs={3} className={classes.base}>
          <Typography className={classes.title}>
            LOGO
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.base}>
          <h5>Test</h5>
          <h5>Test</h5>
          <h5>Test</h5>
        </Grid>
        <Grid item xs={2} className={classes.base}>
          <h5>Test</h5>
          <h5>Test</h5>
          <h5>Test</h5>
        </Grid>
        <Grid item xs={2} className={classes.base}>
          <h5>Test</h5>
          <h5>Test</h5>
          <h5>Test</h5>
        </Grid>
        <Grid item xs={3} className={classes.base} direction="row">
        <div className={classes.avatar}>
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard"/>
          <Avatar alt="Cindy Baker" />
        </div>
      </Grid>
      </Grid>
      <Grid item xs={12} className={classes.base}>
          <Typography className={classes.copy}>
             2019 © - Todos direitos reservados.
          </Typography>
      </Grid>
    </Grid>
  );
}
