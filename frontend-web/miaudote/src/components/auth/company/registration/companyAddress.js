import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <React.Fragment>
            <Container fluid="md">
                <Row className="justify-content-md-left" lg={8}>
                    <Col xs={6}>
                        <h1>Endereço</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-left" lg={8}>
                    <Col xs={6}>
                        <h2>Como os seus clientes podem lhe encontrar</h2>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default class CompanyAddress extends Component {

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        // console.log(values)
        return (
            <div>
                <Header />
                <Container>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>
                                <label htmlFor="">Cep</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    type="text"
                                    name="cep"
                                    placeholder="cep"
                                    defaultValue={values.cep}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>
                                <label htmlFor="">Cidade</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    type="text"
                                    name="cidade"
                                    placeholder="cidade"
                                    defaultValue={values.cidade}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>
                                <label htmlFor="">Bairro</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    type="text"
                                    name="bairro"
                                    placeholder="jardim boas novas"
                                    defaultValue={values.bairro}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>
                                <label htmlFor="">Logradouro</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    type="text"
                                    name="logradouro"
                                    placeholder="alameda trakinas"
                                    defaultValue={values.logradouro}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>
                                <label htmlFor="">Número</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    type="text"
                                    name="numero"
                                    placeholder="500"
                                    defaultValue={values.numero}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>
                                <label htmlFor="">Complemento</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    type="text"
                                    name="complemento"
                                    placeholder="complemento"
                                    defaultValue={values.complemento}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-left">
                            <Col xs={3}>
                                <label htmlFor="">Uf</label>
                            </Col>
                            <Col xs={3}>
                                <input
                                    type="text"
                                    name="uf"
                                    placeholder="uf"
                                    defaultValue={values.uf}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <Button variant="outline-primary" onClick={this.props.prevStep}>Voltar</Button>
                        </Col>
                        <Col xs={3}>
                            <Button variant="outline-primary" onClick={this.continue}>Próximo</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

