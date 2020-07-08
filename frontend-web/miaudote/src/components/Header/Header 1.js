import React from 'react';
import {
  AppBar, Toolbar, Grid, Avatar
} from '@material-ui/core'
import { header } from '../Layout/styles'
import LinksNav from './headerComp/linksNav'

const logo = require('../../images/logoS.jpg')

export default function Header() {
  const classes = header();

  const actualLink = ["initial","user"]

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between" direction="row">
            <Grid item container xs={4} direction="row">
              <LinksNav />
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}