import React from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, AppBar, Toolbar, Typography, Button, List,
ListItem, ListItemText, Collapse, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  button:{
    textDecoration: "none"
  },

  title: {
    flexGrow: 1,
  },
  paddingLeft: theme.spacing(4),

  appBar: {
    boxShadow: "none"
  }
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>  
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              Miaudote
          </Typography>
            <Button color="inherit" primary="Login">Login</Button>  
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
