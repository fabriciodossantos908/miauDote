import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import FormCompany from './components/auth/company/registration/FormCompany'
import Login from './components/auth/login/Login'
import FormUser from './components/auth/user/register/FormUser'
// import moduleName from './components/auth/login/userLogin'
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
                    <FormCompany />
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