import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import FormCompany from './components/auth/company/registration/FormCompany'
import FormUser from './components/auth/user/register/FormUser'
import Navbar from './components/baseComponent/Navbar'

import Test from './pages/test'

function Routes() {
    return (
        <Router>
            <Navbar />

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

                <Route path='/test' exact >
                    <Test />
                </Route>
            </Switch>

        </Router>
    )
}

export default Routes;