import React, { Component } from 'react'
import Cep from '../../../../api/cep'
import { Container, Row, Col, Button } from 'react-bootstrap';

const CepApi = new Cep()

export default class UserAddress extends Component {

    consultCep(event) {
        const address = CepApi.getAddress()

        this.setState({
            [event.target.name.bairro]: address.bairro
        })
    }

    render() {
        const { state, handleChange } = this.props
        return (
            <div>
                <Container>
                    <Row>
                        <h1>
                            Seu endereco
                        </h1>
                    </Row>
                    <Row>
                        <h2>Etapa:{state.step}</h2>
                    </Row>
                </Container>
                <Container className="mt-1 mr-5 al-center">
                    <Row>
                        <label>Cep</label>
                    </Row>
                    <Row>
                        <input
                            type="text"
                            name="cep"
                            placeholder="cep"
                            value={state.cep}
                            onChange={handleChange}
                        />
                    </Row>
                    <Row xs={5}>
                        <Col>
                            <Row>
                                <label>Cidade</label>
                            </Row>
                            <Row>
                                <input
                                    type="text"
                                    name="cidade"
                                    placeholder="Osasco"
                                    value={state.cidade}
                                    onChange={handleChange}
                                />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <label>Bairro</label>
                            </Row>
                            <Row>
                                <input
                                    type="text"
                                    name="bairro"
                                    placeholder="jardins das macieiras"
                                    value={state.bairro}
                                    onChange={handleChange}
                                />
                            </Row>
                        </Col>
                    </Row>
                    <Row xs={5}>
                        <Col>
                            <Row>
                                <label>Logradouro</label>
                            </Row>
                            <Row>
                                <input
                                    type="text"
                                    name="logradouro"
                                    placeholder="logradouro"
                                    value={state.logradouro}
                                    onChange={handleChange}
                                />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <label>Numero da residência</label>
                            </Row>
                            <Row>
                                <input
                                    type="text"
                                    name="numeroCasa"
                                    placeholder="500"
                                    value={state.numero}
                                    onChange={handleChange}
                                />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <label>Estado</label>
                    </Row>
                    <Row>
                        <input
                            type="text"
                            name="uf"
                            placeholder="São Paulo"
                            value={state.uf}
                            onChange={handleChange}
                        />
                    </Row>
                    <Button variant="outline-primary" type="submit" > Criar</Button>
                </Container>
            </div>
        )
    }
}
