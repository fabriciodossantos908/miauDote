import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/home'
import FormCompany from './components/auth/company/registration/FormCompany'
import FormUser from './components/auth/user/register/FormUser'
import Navbar from './components/baseComponent/Navbar'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>

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
                </Switch>
            </Router>
        </div>
    )
}
export default App;