import React from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, AppBar, Toolbar, Typography, Button, List,
ListItem, ListItemText, Collapse } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paddingLeft: theme.spacing(4),
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <a href="#">LOGO</a>
          </Typography>
            <Button color="inherit" primary="Login">Login</Button>  
          <List>
              <ListItem button onClick={handleClick}>
                <ListItemText color="inherit" primary="Cadastrar" />
                  {open ? <ExpandLess /> : <ExpandMore />}  
                </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Button color="inherit">Login</Button>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <Button color="inherit">Empresa</Button>
                  </ListItem>
                </List>
              </Collapse>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
