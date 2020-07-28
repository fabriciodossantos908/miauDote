import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, useScrollTrigger } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

import { theme, header } from '../Layout/styles';

import { LinksBase } from './headerComp';
import { Perfil } from '../../pages/UserHome/compStyles';
import BadgeAvatars from './headerComp/IconProfileUser';
import { palette } from '../Layout/theme';

export default function HeaderMain() {
  const classes = header();

  const name = localStorage.getItem('user');

  function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      threshold: 100,
    });

    return (
      <AppBar
        elevation={0}
        position="sticky"
        style={
          trigger !== true
            ? {
                transition: '1s',
                backgroundColor: 'rgba(0,0,0,0.3)',
              }
            : { transition: '1s', backgroundColor: palette.primary.main }
        }
      >
        {children}
      </AppBar>
    );
  }
  return (
    <HideOnScroll>
      <Toolbar className={classes.appbarmain}>
        <Grid item xs={1}>
          <Perfil classHeader={header} />
        </Grid>
        <Grid item container>
          <Grid
            item
            container
            xs={8}
            direction="row"
            justify="space-evenly"
            style={{ marginLeft: 150 }}
          >
            <LinksBase theme={theme} />
          </Grid>
        </Grid>
        <Grid item xs={2} style={{ marginLeft: 'auto' }}>
          <Link to="/profile" title={name} alt={name} className={classes.links}>
            <BadgeAvatars />
          </Link>
        </Grid>
      </Toolbar>
    </HideOnScroll>
  );
}
