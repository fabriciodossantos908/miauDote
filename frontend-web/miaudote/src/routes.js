import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
<<<<<<< HEAD

import Home from './pages/home'
// import CheckoutCompanyStep1 from './components/signUp/company/checkoutCompanyStep1'
=======
import Home from './pages/initialHome/InitialHome'
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
import CheckoutCompanyStep from './components/signUp/CheckoutCompany/checkoutCompanyStep'
import CheckoutUserStep from './components/signUp/CheckoutUser/checkoutUserStep'
import CheckoutPet from './components/PetSignUp/CheckoutPet'
import Login from './components/SignIn/Login'
import Test from './pages/test'
<<<<<<< HEAD
import { MainChunks } from './pages/chuncks'
=======
import Gear from './pages/utils/gears/gear'
import UserHome from './pages/UserHome/home'
import HeaderBase from './components/Header/headerBase'
import HeaderInitial from './components/Header/HeaderInitial'
import UserProfile from './pages/profile/userProfile/UserProfile'
import PetList from './pages/petList/PetList'
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500

function Routes() {
    return (
        <React.Fragment>

<<<<<<< HEAD
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
                <Route path='/formPet' exact >
                    <CheckoutPet />
                </Route>

                <Route path='/login' exact >
                    <Login/>
                </Route>
                <Route path='/test' exact >
                    <Test />
                </Route>
           </Switch>
        </Router>
=======
            <Router>

                {/* <HeaderInitial /> */}
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
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
        </React.Fragment>
    )

}


export default Routes;