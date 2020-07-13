import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/initialHome/InitialHome'
import CheckoutCompanyStep from './components/signUp/CheckoutCompany/checkoutCompanyStep'
import CheckoutUserStep from './components/signUp/CheckoutUser/checkoutUserStep'
import CheckoutPet from './components/PetSignUp/CheckoutPet'
import Login from './components/SignIn/Login'
import Test from './pages/test'
import Gear from './pages/utils/gears/gear'
import UserHome from './pages/UserHome/home'
import HeaderBase from './components/Header/headerBase'
import HeaderInitial from './components/Header/HeaderInitial'
import UserProfile from './pages/profile/userProfile/UserProfile'
import PetList from './pages/petList/PetList'

function Routes() {
    return (
        <React.Fragment>

            <Router>

                <HeaderBase />

                <Switch>
                    <Route path='/' exact >
                        <UserHome />
                    </Route>

                    <Route path='/pet' exact>
                        <PetList/>
                    </Route>

                    <Route path='/about' exact>
                        <Gear/>
                    </Route>
                    <Route path='/contacts' exact>
                        <Gear/>
                    </Route>
                    <Route path='/marketing' exact>
                        <Gear/>
                    </Route>
                    <Route path='/community' exact>
                        <Gear/>
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
                    <Route path='/profile' exact>
                        <UserProfile />
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