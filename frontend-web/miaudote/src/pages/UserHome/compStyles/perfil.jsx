import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PetsIcon from '@material-ui/icons/Pets';
import MenuIcon from '@material-ui/icons/Menu';
import { mainNav } from './index';
import { header } from '../../../components/Layout/styles';

import { palette } from '../../../components/Layout/theme';

export default function Perfil() {
  const classesMain = mainNav();
  const classesHeader = header();
  const [state, setState] = React.useState({
    left: false,
  });

  const photo = localStorage.getItem('photo');
  const user = localStorage.getItem('user');

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
        <Avatar
          alt={user}
          src={photo}
          style={{ marginBottom: 20 }}
          className={classesMain.userPhoto}
        />
        <Typography variant="subtitle1"> {user} </Typography>
      </Container>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/pet" className={classesHeader.linksPerfil}>
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Adoção de pets" />
          </ListItem>
        </Link>

        <Link to="/petLost" className={classesHeader.linksPerfil}>
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Procure o pet" />
          </ListItem>
        </Link>
      </List>
      <Divider />

      <List>
        <Link to="/profile" className={classesHeader.linksPerfil}>
          <ListItem button>
            <ListItemText primary="Perfil" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: palette.common.white }} />
          </Button>
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
