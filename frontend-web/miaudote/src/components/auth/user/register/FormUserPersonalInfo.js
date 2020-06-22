import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
<<<<<<< HEAD
import InputMask from 'react-input-mask';
=======
import InputMask from 'react-input-mask'
>>>>>>> a89d503ff27b2b6cb6f6682e5efa55b23ee2a9b8

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
                    <label>Celular</label>
                </Row>
                <Row>
                    <InputMask
                        type="text"
                        mask="(99) 9 9999-9999"
                        maskChar="_"
                        name="celular"
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

<<<<<<< HEAD
=======
                <Row>
>>>>>>> a89d503ff27b2b6cb6f6682e5efa55b23ee2a9b8
                    <InputMask
                        type="text"
                        mask="99/99/9999"
                        maskChar="_"
                        name="dt_nasc"
<<<<<<< HEAD
                        placeholder="data de nascimento"
=======
                        placeholder="07/08/2001"
>>>>>>> a89d503ff27b2b6cb6f6682e5efa55b23ee2a9b8
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
<<<<<<< HEAD
                        placeholder="sexo"
                        defaultValue={state.sexo}
=======
                        placeholder="Sexo"
                        value={state.sexo}
>>>>>>> a89d503ff27b2b6cb6f6682e5efa55b23ee2a9b8
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
<<<<<<< HEAD
                        mask="999.999.999-99"
=======
                        mask="999.999.999.99"
>>>>>>> a89d503ff27b2b6cb6f6682e5efa55b23ee2a9b8
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
