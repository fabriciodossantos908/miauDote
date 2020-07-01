import React from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import {
  AppBar, Toolbar, Typography, Button, List,
  ListItem, ListItemText, Collapse, Link, Grid, Avatar
} from '@material-ui/core'

import { Links } from './headerComp'

const logo = require('../../images/logoS.jpg')

export default function Header(props) {
  const classes = props.header();
  // const formUser = '/formUser'
  // const formCompany = '/formCompany'
  // const login = '/login'
  // const home = "/"

  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

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
            </Grid>
            <Grid item xs={2}>
              <Links />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
