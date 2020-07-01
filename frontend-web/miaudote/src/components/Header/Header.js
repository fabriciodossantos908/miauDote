import React from 'react';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import { AppBar, Toolbar, Typography, Button, List,
ListItem, ListItemText, Collapse, Link} from '@material-ui/core'

import Links  from './headerComp/links'

export default function Header(props) {
  const classes = props.header();
  const formUser = '/formUser'
  const formCompany = '/formCompany'
  const login = '/login'
  const home = "/"

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="color" className={classes.appBar}>  
        <Toolbar>
          <Links />
          <List>
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Cadastrar"/>
                  {open ? <ExpandLess /> : <ExpandMore />}  
                </ListItem>
              <Collapse in={!open} unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Typography>
                      <Link href="/formUser" disable>
                        Usuário
                      </Link>
                    </Typography>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <Typography>
                      <Link href="/formCompany" disable>
                        Empresa
                      </Link>
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
