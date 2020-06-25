import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
// import CheckoutCompanyStep1 from './components/signUp/company/checkoutCompanyStep1'
import CheckoutCompanyStep from './components/signUp/CheckoutCompany/checkoutCompanyStep'
import CheckoutUserStep from './components/signUp/CheckoutUser/checkoutUserStep'
import Login from './components/SignIn/Login'
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
                    <CheckoutUserStep />
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