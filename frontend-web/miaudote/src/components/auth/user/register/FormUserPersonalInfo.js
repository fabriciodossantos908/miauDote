import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

export default class pesonalData extends Component {
    render() {
        const { state, handleChange, nextStep, prevStep } = this.props;
        console.log(state)
        return (
            <Container>
                <Row>
                    <h1>Dados pessoais</h1>
                </Row>
                <Row>
                    <h2>Etapa:{state.step}</h2>
                </Row>
                <Row>
                    <label>Celular</label>
                </Row>
                <Row>
                    <input
                        type="text"
                        name="celular"
                        placeholder="celular"
                        onChange={handleChange}
                        defaultValue={state.celular}
                    />
                </Row>

                <Row>
                    <label>Data nascimento</label>
                </Row>

                <Row>

                    <input
                        type="date"
                        name="dt_nasc"
                        placeholder="data de nascimento"
                        value={state.data_nascimento}
                        onChange={handleChange}
                    />
                </Row>

                <Row>
                    <label>Sexo</label>
                </Row>

                <Row>

                    <input
                        type="text"
                        name="sexo"
                        placeholder="sexo"
                        value={state.sexo}
                        onChange={handleChange}
                    />
                </Row>

                <Row>
                    <label>CPF</label>
                </Row>

                <Row>

                    <input
                        type="text"
                        name="cpf"
                        placeholder="cpf"
                        value={state.cpf}
                        onChange={handleChange}
                    />
                </Row>

                <Row className="justify-content-md-left mt-2">
                    <Col xs={2}>
                        <Button variant="outline-primary" onClick={prevStep}>Anterior</Button>
                    </Col>
                    <Col xs={2}>
                        <Button variant="outline-primary" onClick={nextStep}>Próximo</Button>
                    </Col>
                </Row>

            </Container>
        )
    }
}
