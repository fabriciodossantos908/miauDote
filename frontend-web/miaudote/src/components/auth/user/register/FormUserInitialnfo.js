import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../../../styles/style.css'


export default class FormBaseInfo extends Component {

    // continue = () => { this.props.nextStep() }

    render() {
        const { state, handleChange, nextStep } = this.props
        return (
            <Container>
                <div className="mt-1 mr-5 al-center">
                    <Row className="justify-content-md-right">
                        <h1>Cadastro de usuário</h1>
                    </Row>
                    <Row>
                        <h2>Etapa:{state.step}</h2>
                    </Row>
                </div>
                <Container  className="mt-1 mr-5 al-center" fluid="lg">

                    <Row>
                        <label>Seu Email</label>
                    </Row>
                    <Row>
                        <input
                            type="email"
                            name="email"
                            placeholder="ex:joao.11@miaudote.com"
                            onChange={handleChange}
                            defaultValue={state.senha}
                        />
                    </Row>
                    <Row>
                        <label>Sua senha super secreta</label>
                    </Row>
                    <Row>
                        <input
                            type="password"
                            name="senha"
                            placeholder="senha"
                            onChange={handleChange}
                            defaultValue={state.senha}
                        />
                    </Row>
                    <Row>
                        <label>Repita sua super senha</label>
                    </Row>
                    <Row>
                        <input
                            type="password"
                            name="senha_confirmation"
                            placeholder="repita a senha"
                            onChange={handleChange}
                            defaultValue={state.senha_confirmation}
                        />
                    </Row>
                    <Row className="justify-content-md-center mt-2">
                        <Col>
                            <Button variant="outline-primary" onClick={nextStep}>Próximo</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}