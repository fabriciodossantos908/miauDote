import React, { Component } from 'react'
import Axios from 'axios'

import './registrer.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <React.Fragment>
            <Row className="justify-content-md-left" xs={4} lg={8}>
                <Col xs={5}>
                    <h1>Cadastro de Empresa</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-left" xs={4} lg={8}>
                <Col xs={5}>
                    <h3>Informções básicas de sua empresa</h3>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export class companyBaseInfo extends Component {


    // Getting all services
    servicesList = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/empresas')
            .then(
                (res) => {
                    const services = res.data;
                    // this.setvalues({ services })
                    console.log(JSON.stringify(services))
                })
    }

    // Create the service options element
    ServiceOpt = () => {
        const service = this.servicesList()
        console.log(JSON.stringify(service))
    }

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { state, handleChange, trimMask } = this.props
        return (
            <Container border="primary" className="mt-5 mr-1 baseModal" fluid="lg" >
                <Row>
                    <Col>
                        <Header />
                    </Col>
                    <Col>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>
                                <label htmlFor="nome_representante">Nome do representante</label>
                            </Col>
                            <Col xs={3}>

                                <input
                                    type="text"
                                    defaultValue={state.nome_representante}
                                    placeholder="pedro"
                                    name="nome_representante"
                                    id="nome_representante"
                                    onChange={handleChange}
                                    onKeyUp={trimMask}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>

                                <label htmlFor="email_representante">Email do representante</label>
                            </Col>
                            <Col xs={3}>

                                <input
                                    type="email"
                                    defaultValue={state.email_representante}
                                    placeholder="pedro@miaudote.com"
                                    name="email_representante"
                                    id="email_representante"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>

                                <label htmlFor="senha">Senha</label>
                            </Col>
                            <Col xs={3}>

                                <input
                                    type="password"
                                    defaultValue={state.senha}
                                    placeholder="senha"
                                    name="senha"
                                    id="senha"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>

                                <label htmlFor="senha_confirmation">repita a Senha</label>
                            </Col>
                            <Col xs={3}>

                                <input
                                    type="password"
                                    defaultValue={state.senha_confirmation}
                                    placeholder="Repita a senha"
                                    name="senha_confirmation"
                                    id="senha_confirmation"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mt-2">
                            <Col xs={5}>
                                {/* <input defaultValue={console.log(valuesTest)} /> */}
                                <Button variant="outline-primary" onClick={this.continue}>Próxima etapa</Button>{''}

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )

    }
}

export default companyBaseInfo
