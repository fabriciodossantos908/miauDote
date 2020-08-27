import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Typography, useScrollTrigger } from '@material-ui/core';

import { theme, header } from '../Layout/styles';
import { LinksInitial } from './headerComp';
import { palette } from '../Layout/theme';

export default function HeaderMain() {
  const classes = header();

  function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      threshold: 500,
    });

    return (
      <AppBar
        elevation={0}
        position="sticky"
        style={
          trigger !== true
            ? { transition: '1s', backgroundColor: palette.primary.light }
            : { transition: '1s', backgroundColor: palette.primary.main }
        }
      >
        {children}
      </AppBar>
    );
  }

  return (
    <HideOnScroll>
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
    </HideOnScroll>
  );
}
