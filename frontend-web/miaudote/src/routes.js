import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import CheckoutCompanyStep from './components/signUp/company/checkoutCompanyStep'
import Login from './components/SignIn/Login'
import FormUser from './components/signUp/user/FormUser'
import Test from './pages/test'

function Routes() {
    return (
        <React.Fragment>

        <Router>

            <Switch>
                <Route path='/' exact >
                    <Home />
                </Route>

                <Route path='/formCompany' exact >
                    <CheckoutCompanyStep />
                </Route>

                <Route path='/formUser' exact >
                    <FormUser />
                </Route>

                <Route path='/login' exact >
                    <Login/>
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