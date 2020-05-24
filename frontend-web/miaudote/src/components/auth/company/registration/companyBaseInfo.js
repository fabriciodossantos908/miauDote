import React, { Component } from 'react'
// import CompanyForm from './companyForm'
import Axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
    return (
        <Container>
            <Row >
                <Col>
                    <h1>Cadastro de Empresa</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Informções básicas de sua empresa</h2>
                </Col>
            </Row>
        </Container>
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
        const { values, handleChange } = this.props
        return (
            <div>

                <Header />
                <Container>
                    <Row>
                        <Col>
                            <label htmlFor="nome_representante">Nome do representante</label>
                        </Col>
                        <Col>

                            <input
                                type="text"
                                defaultValue={values.nome_representante}
                                placeholder="pedro"
                                name="nome_representante"
                                id="nome_representante"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <label htmlFor="email_representante">Email do representante</label>
                        </Col>
                        <Col>

                            <input
                                type="email"
                                defaultValue={values.email_representante}
                                placeholder="pedro@miaudote.com"
                                name="email_representante"
                                id="email_representante"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <label htmlFor="senha">Senha</label>
                        </Col>
                        <Col>

                            <input
                                type="password"
                                defaultValue={values.senha}
                                placeholder="senha"
                                name="senha"
                                id="senha"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <label htmlFor="senha_confirmation">repita a Senha</label>
                        </Col>
                        <Col>

                            <input
                                type="password"
                                defaultValue={values.senha_confirmation}
                                placeholder="Repita a senha"
                                name="senha_confirmation"
                                id="senha_confirmation"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            {/* <input defaultValue={console.log(valuesTest)} /> */}
                            <button onClick={this.continue}>Próxima etapa</button>
                        </Col>
                    </Row>
                </Container>
            </div>

        )

    }
}

export default companyBaseInfo
