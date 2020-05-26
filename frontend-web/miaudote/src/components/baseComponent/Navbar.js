import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to='/'>
                        home page
                </Link>
                </li>
                <li>
                    <Link to='/formUser'>
                        Cadastrar Usuário
                </Link>
                </li>
                <li>
                    <Link to='/formCompany'>
                        cadastrar Empresa
                </Link>
                </li>
            </ul>
        </React.Fragment>
    )
}


export default Navbar