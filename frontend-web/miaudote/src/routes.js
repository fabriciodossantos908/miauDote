import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './components/home'
import FormCompany from './components/auth/company/registration/FormCompany'
import FormUser from './components/auth/user/register/FormUser'

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>
                            <Link to='/RegistrarEmpresa'>Cadastro de empresa</Link>
                        </li>
                        <li><Link to='/RegistrarUsuario'>Cadastro de Usuário</Link></li>
                    </ul>
                </div>

                <hr />
                <Switch>
                    <Route path='/' Component={Home} />
                    <Route path='/RegistrarEmpresa' Component={FormCompany} />
                    <Route path='/RegistrarUsuario' Component={FormUser} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes
