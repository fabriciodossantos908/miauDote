import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/MainHome/home'
import CheckoutCompanyStep from './components/signUp/CheckoutCompany/checkoutCompanyStep'
import CheckoutUserStep from './components/signUp/CheckoutUser/checkoutUserStep'
import CheckoutPet from './components/PetSignUp/CheckoutPet'
import Login from './components/SignIn/Login'
import Test from './pages/test'

import { theme, header } from './components/Layout/styles'
import { AppBar, Toolbar, Grid, Avatar } from '@material-ui/core'

const logo = require('./images/logoS.jpg')


const NavLog = () => {
    const classes = header();

    return (
        <Grid xs={12} className={classes.root}>
            <AppBar position="static" color="color" className={classes.appBar}>
                <Toolbar>
                    <Grid container direction="row" justify="center">
                        <Grid item container xs={4} direction="row" justify="space-evenly">
                            <Grid item>
                                <Link to="/aboutUs">Sobre nós</Link>
                            </Grid>
                            <Grid item>
                                <Link to="/">
                                    <Avatar
                                        alt="Miaudote"
                                        src={logo}
                                    />
                                </Link>
                            </Grid>
                            <Grid item>

                                <Link to="/Contact">Contatos</Link>
                            </Grid>
                            <Grid item>

                                <Link to="/Mission">Missão</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}


function Routes() {
    return (
        <React.Fragment>

            <Router>
                <NavLog />

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
                    <Route path='/formPet' exact >
                        <CheckoutPet />
                    </Route>

                    <Route path='/login' exact >
                        <Login />
                    </Route>
                    <Route path='/test' exact >
                        <Test />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )

}


export default Routes;