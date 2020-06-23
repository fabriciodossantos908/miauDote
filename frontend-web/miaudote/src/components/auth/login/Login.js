import React, { Component } from 'react'
import '../../../materialize/css/materialize.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export class CompanyLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            senha: ""
        }            

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            email: "testes"
        });
    }

    render() {

        const {handleChange} = this.props
        const state = this.props.email
        return (
            <Container className="mt-1 mr-5 al-center" fluid="lg">
            <Form>
                <Row>
                    <Col id="login-left-Container">
                        <Row>
                            <label>Seu Email 
                            </label>
                        </Row>
                        <Row>
                            <input
                                type="email"
                                name="email"
                                placeholder="ex:joao.11@miaudote.com"
                                onChange={handleChange}
                                Value={state}
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
                                onChange={this.handleChange}
                                defaultValue={this.state.senha}
                            />
                        </Row>
                        <Row className="justify-content-md-center mt-2">
                            <Col>
                                <Button variant="outline-primary" type="submit">Login</Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col id="login-right-Container">
                        <Col>
                            <Row className="justify-content-md-right">
                                <h1>Bem vindo!</h1>
                            </Row>
                        </Col>
                    </Col>

                </Row>
                </Form>
            </Container>
                        )
                    }
                }
                
                export default CompanyLogin
