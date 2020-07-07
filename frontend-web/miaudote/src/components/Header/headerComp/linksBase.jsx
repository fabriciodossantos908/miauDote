import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Home from '../../../pages/MainHome/home'
import CheckoutCompanyStep from '../../signUp/CheckoutCompany/checkoutCompanyStep'
import CheckoutUserStep from '../../signUp/CheckoutUser/checkoutUserStep'

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
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
            <Link to="/test"
              className={classes.links}
            >
              teste
             </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/formUser"
              className={classes.link}
            >
              SignUp Usuário
               </Link>
          </MenuItem>

          <Switch>
            <Route path='/' exact >
              <Home />
            </Route>

            <Route path='/formCompany' exact >
              <CheckoutCompanyStep />
            </Route>

            <Route path='/formUser' exact >
              <CheckoutUserStep />
            </Route>

          </Switch>

        </Router>
      </Menu>
    </React.Fragment>
  );
}