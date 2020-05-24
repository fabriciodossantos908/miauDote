import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import FormCompany from './components/auth/company/registration/FormCompany'
import FormUser from './components/auth/user/register/FormUser'


const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact >
                        <Home/>
                    </Route>
                    <Route path='/formCompany' exact >
                        <FormCompany/>
                    </Route>
                    <Route path='/formUser' exact >
                        <FormUser/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App;