import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../../../materialize/css/materialize.css'

export default class FormBaseInfo extends Component {


    // continue = () => {
    //     const { state} = this.props

    //     const data = {
    //         email: state.email,
    //         senha: state.senha
    //     }

    //     let schema = yup.object().shape({
    //         email: yup
    //             .string()
    //             .email("Coloque um email válido"),
    //         senha: yup
    //             .string()
    //             .min(8, "Muito curta a senha")
    //             .max(30, "Muita longa a senha"),
    //     })

    //     schema.validate(data).catch(function (err) {
    //          error = { errorsInitial : [err.errors]}
    //     });

    //      const error = this.valData(data)
    //      alert(JSON.stringify(error))
    // }

    
    render() {
        const { state, handleChange } = this.props
        return (
            <Container className="mt-1 mr-5 al-center" fluid="lg">
                <Row>
                    <Col id="left-form">
                        <Col>
                            <Row className="justify-content-md-right">
                                <h1>Cadastro de usuário</h1>
                            </Row>
                            <Row>
                                <h3>Etapa:{state.step}</h3>
                            </Row>
                        </Col>
                    </Col>
                    <Col id="right-form">
                        <Row>
                            <label>Seu Email 
                                 {/* {
                                () => {
                                    if (
                                        !this.props.errors.email === null) {
                                        console.log(this.props.errors.email)
                                        return ('<h1> this.props.errors.email<h1>')
                                    }
                                } */}
                            </label>
                        </Row>
                        <Row>
                            <input
                                type="email"
                                name="email"
                                placeholder="ex:joao.11@miaudote.com"
                                onChange={handleChange}
                                defaultValue={state.email}
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
                                <Button variant="outline-primary" onClick={this.props.nextStep}>Próximo</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        )
    }
}