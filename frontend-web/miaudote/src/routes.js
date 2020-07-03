import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/MainHome/home'
import CheckoutCompanyStep from './components/signUp/CheckoutCompany/checkoutCompanyStep'
import CheckoutUserStep from './components/signUp/CheckoutUser/checkoutUserStep'
import CheckoutPet from './components/PetSignUp/CheckoutPet'
import Login from './components/SignIn/Login'
import Test from './pages/test'

import HeaderMain from './pages/MainHome/header'

function Routes() {
    return (
        <React.Fragment>

            <Router>
                <HeaderMain />

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