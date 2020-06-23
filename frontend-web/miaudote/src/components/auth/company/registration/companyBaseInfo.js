import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../../../materialize/css/materialize.css'
 

const Header = () => {
    return (
        <React.Fragment>
            <Row className="justify-content-md-left" xs={4} lg={8}>
                <Col xs={10} lg={10}>
                    <h1 className="font-italic">Cadastro de Empresa</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-left" xs={4} lg={8}>
                <Col xs={8}>
                    <h3 className="font-italic">Informções básicas de sua empresa</h3>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export class companyBaseInfo extends Component {
    // Create the service options element
    ServiceOpt = () => {
        const service = this.servicesList()
        console.log(JSON.stringify(service))
    }

    valPassword(event) {
        const {senha} = this.props
        if(!senha === event.target.value){
            alert("are the same")
        }else {
            alert("that's aren't the same")
        }
    }

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { state, handleChange } = this.props
        console.log(state)
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
                                    onKeyUp={this.props.valInsert}
                                    onChange={handleChange}
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
                                    onKeyUp={this.props.valInsert}
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
                                    onKeyUp={this.props.valInsert}
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