import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import InputMask from 'react-input-mask';

export default class pesonalData extends Component {
    render() {
        const { state, handleChange, nextStep, prevStep, validInsert } = this.props;
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
                        <label for="celular">Celular</label>
                        <InputMask
                            type="text"
                            mask="(99) 9 9999-9999"
                            maskChar="_"
                            name="celular"
                            id="celular"
                            class="validate"
                            placeholder="(11) 9999-9999"
                            onChange={handleChange}
                            defaultValue={state.celular}
                            onKeyUp={validInsert}
                        />
                    </Row>

                    <Row>
                        <label>nome</label>
                    </Row>
                    <Row>
                        <InputMask
                            type="text"
                            name="nome"
                            placeholder="joao vitor"
                            onChange={handleChange}
                            defaultValue={state.nome}
                        />
                    </Row>

                    <Row>
                        <label>Data nascimento</label>
                    </Row>

                    <Row>
                        <InputMask
                            type="text"
                            mask="99/99/9999"
                            maskChar="_"
                            name="dt_nasc"
                            placeholder="07/08/2001"
                            defaultValue={state.data_nascimento}
                            onChange={handleChange}
                            onKeyUp={validInsert}
                        />
                    </Row>

                    <Row>
                        <label>Sexo</label>
                    </Row>

                    <Row>

                        <InputMask
                            type="text"
                            mask="a"
                            name="sexo"
                            placeholder="sexo"
                            defaultValue={state.sexo}
                            value={state.sexo}
                            onChange={handleChange}
                            onKeyUp={validInsert}
                        />
                    </Row>

                    <Row>
                        <label>CPF</label>
                    </Row>

                    <Row>

                        <InputMask
                            type="text"
                            mask="999.999.999.99"
                            maskChar="_"
                            name="cpf"
                            placeholder="999.999.999.99"
                            value={state.cpf}
                            onChange={handleChange}
                            onKeyUp={validInsert}
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
