import React from 'react';
import { header } from '../../../components/Layout/styles'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import { useStyle } from './styles'
import { Tabs, Avatar, Tab } from '@material-ui/core';

const logo = require('../../../images/logoS.jpg')

const LinkUser = () => {
  const classes = header()
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return(
    <Tabs
    value={value}
    indicatorColor="black"
    textColor="black"
    onChange={handleChange}
>
    <Link to="/formPet" className={classes.links}>
        <Tab label="Pet cadastro" />
    </Link>

    <Link to="/logoff" className={classes.links}>
        <Tab label="Logoff" />
    </Link>
    <Link to="/">
        <Avatar
            alt="Miaudote"
            src={logo}
        />
    </Link>
    <Link to="/making" className={classes.links}>
        <Tab label="Pet perdido" />
    </Link>
    <Link to="/making" className={classes.links}>
        <Tab label="Lojinha" />
    </Link>

</Tabs>
  )
};

const LinkInitial = () => {
  const classes = header()
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return(
    <Tabs
    value={value}
    indicatorColor="black"
    textColor="black"
    onChange={handleChange}
>
    <Link to="/formCompany" className={classes.links}>
        <Tab label="Signup empresa" />
    </Link>

    <Link to="/formUser" className={classes.links}>
        <Tab label="Signup Usuário" />
    </Link>

    <Link to="/">
        <Avatar
            alt="Miaudote"
            src={logo}
        />
    </Link>

    <Link to="/login" className={classes.links}>
        <Tab label="Login" />
    </Link>
    <Link to="/formPet" className={classes.links}>
        <Tab label="Cadastrar pet" />
    </Link>

</Tabs>

  )
};

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
    <LinkInitial />
    // <React.Fragment>
    //   <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    //     SignUp
    //   </Button>
    //   <Menu
    //     id="simple-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <Router>
    //       <MenuItem onClick={handleClose}>
    //         <Link to="/test"
    //           className={classes.links}
    //         >
    //           teste
    //          </Link>
    //       </MenuItem>
    //       <MenuItem onClick={handleClose}>
    //         <Link to="/formUser"
    //           className={classes.link}
    //         >
    //           SignUp Usuário
    //            </Link>
    //       </MenuItem>

    //       <Switch>
    //         <Route path='/' exact >
    //           <Home />
    //         </Route>

    //         <Route path='/formCompany' exact >
    //           <CheckoutCompanyStep />
    //         </Route>

    //         <Route path='/formUser' exact >
    //           <CheckoutUserStep />
    //         </Route>

    //       </Switch>

    //     </Router>
    //   </Menu>
    // </React.Fragment>
  );
}