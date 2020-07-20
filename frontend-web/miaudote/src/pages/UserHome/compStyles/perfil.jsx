import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar, Container, Typography } from '@material-ui/core';
import { mainNav } from './style'
import { header } from '../../../components/Layout/styles'

import PetsIcon from '@material-ui/icons/Pets';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'


const userPhoto = require('../../../images/petImg/dog.jpg')

export default function Perfil() {
  const classesMain = mainNav()
  const classesHeader = header()
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Container className={classesMain.perfilField}>
        <Avatar alt="João andrade" src={userPhoto} className={classesMain.userPhoto} />
        <Typography
          variant="subtitle1"
        >
          João andrade
        </Typography>
      </Container>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">

        <Link to="/myPet" className={classesHeader.linksPerfil}>

          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Pets" />
          </ListItem>
        </Link>

        <Link to="/profile" className={classesHeader.linksPerfil}>
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="perfil" />
          </ListItem>
        </Link>

      </List>
      <Divider />

      <List>
        <Link to="/config" className={classesHeader.linksPerfil}>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
        </Link>
      </List>
    </div >
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon /></
          Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}