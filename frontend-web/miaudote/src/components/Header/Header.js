import React from 'react';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import { AppBar, Toolbar, Typography, Button, List,
ListItem, ListItemText, Collapse} from '@material-ui/core'
import {useStyle} from './style.js'

export default function Header(props) {
  const classes = props.header();
  const classesf = useStyle();
  

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appBar}>  
        <Toolbar>
          <Typography  color="secondary">
              <h1 className={classesf.firstName}>Miau</h1>
          </Typography>
          <Typography color="secondary" className={classes.title}>
              <h1 className={classesf.twoName}>dote</h1>
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
