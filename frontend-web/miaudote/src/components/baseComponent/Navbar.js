import React from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, AppBar, Toolbar, Typography, Button, List,
ListItem, ListItemText } from '@material-ui/core'

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
            LOGO
          </Typography>
          <List>
          <ListItem button onClick={handleClick}>
            <ListItemText color="inherit" primary="Login" />
              {open ? <ExpandLess /> : <ExpandMore />}  
            </ListItem>
          </List>
          <List>
          <ListItem button onClick={handleClick}>
            <ListItemText color="inherit" primary="Cadastrar" />
              {open ? <ExpandLess /> : <ExpandMore />}  
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
