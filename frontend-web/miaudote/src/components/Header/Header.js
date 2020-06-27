import React from 'react';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import { AppBar, Toolbar, Typography, Button, List,
ListItem, ListItemText, Collapse} from '@material-ui/core'

export default function Header(props) {
  const classes = props.header();
  

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appBar}>  
        <Toolbar>
          <Typography variant="h6" color="secondary" className={classes.title}>
              Miaudote
          </Typography>
            <Button primary="Login" color="inherit">Login</Button>  
          <List>
              <ListItem button onClick={handleClick}>
                <ListItemText color="inherit" primary="Cadastrar" />
                  {open ? <ExpandLess /> : <ExpandMore />}  
                </ListItem>
              <Collapse in={!open} unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Button color="inherit">Usuario</Button>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <Button color="inherit"><a>Empresa</a></Button>
                  </ListItem>
                </List>
              </Collapse>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
