import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Typography } from '@material-ui/core';

import { theme, header } from '../Layout/styles';
import { LinksInitial } from './headerComp';

export default function HeaderMain() {
  const classes = header();

  return (
    <Grid item>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h5">Miaudote</Typography>
          <Grid item container>
            <Grid
              item
              container
              xs={8}
              direction="row"
              justify="space-evenly"
              style={{ marginLeft: 'auto' }}
            >
              <LinksInitial theme={theme} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
