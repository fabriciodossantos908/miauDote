import React from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import {
  AppBar, Toolbar, Typography, Button, List,
  ListItem, ListItemText, Collapse, Grid, Avatar
} from '@material-ui/core'

import { Link } from 'react-router-dom'

import { theme, header } from '../Layout/styles'

const logo = require('../../images/logoS.jpg')

export default function Header() {
  const classes = header();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="color" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between" direction="row">
            <Grid item container xs={4} direction="row">
              <Avatar
                alt="Miaudote"
                src={logo}
              />
                <Link
                  style={{ color: theme.palette.primary.light }}
                  to="/">
                  Miaudote
                    </Link>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}