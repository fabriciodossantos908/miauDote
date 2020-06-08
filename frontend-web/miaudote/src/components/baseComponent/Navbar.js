import React from 'react'
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown
} from 'react-bootstrap'

const Links = () => {
    return (
        <React.Fragment>
            <Nav className="mr-auto">
                <NavDropdown title="Empresa" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/formCompany">SignUp Empresa</NavDropdown.Item>
                    <NavDropdown.Item href="/loginCompany">SignIn Empresa</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Usuario" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/formUser">SignUp Usuário</NavDropdown.Item>
                    <NavDropdown.Item href="/loginUser">SignIn Usuário</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </React.Fragment>
    )
}

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">MiauDote</Navbar.Brand>
            <Navbar.Brand href="/test">teste</Navbar.Brand>
            <Links />
            <Form inline>
                <FormControl type="text" placeholder="procurar" className="mr-sm-2" />
                <Button variant="outline-info">Procurar</Button>
            </Form>
        </Navbar>
    )
}


export default Header