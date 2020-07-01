import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useStyle } from './styles'


export default function Links() {
  const classes = useStyle()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        SignUp
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Router>
          <MenuItem onClick={handleClose}>
            <Link to="/formCompany"
              className={classes.links}
            >
              SignUp Empresa
             </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/formUser"
              className={classes.link}
            >
              SignUp Usuário
               </Link>
          </MenuItem>
        </Router>
      </Menu>
    </React.Fragment>
  );
}