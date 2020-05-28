import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
=======
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
>>>>>>> 50ffba82e83b4d2e34abd08d35932fb57d2815d8

import Home from './pages/home'
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