import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <React.Fragment>
            <Container fluid="md">
                <Row className="justify-content-md-left" lg={8}>
                    <Col xs={6}>
                        <h1>Informacões pessoais</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-left" lg={8}>
                    <Col xs={6}>
                        <h2>Dados da empresa</h2>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export class companyPersonalInfo extends Component {

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <Header />
                <Container>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="celular_representante">Celular do representante</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                defaultValue={values.celular_representante}
                                placeholder="(11) 911211-1231"
                                name="celular_representante"
                                id="celular_representante"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="celular_representante">Telefone</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                defaultValue={values.telefone}
                                placeholder="(11) 51211-1231"
                                name="telefone"
                                id="telefone"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="tipo_servico">tipo de segmento</label>
                        </Col>
                        <Col xs={3}>
                            <select>
                                <option>teste</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="razao_social">Razão social</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                defaultValue={values.razao_social}
                                placeholder="miaudote s.a"
                                name="razao_social"
                                id="razao_social"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="nome_empresa">Nome da empresa</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                defaultValue={values.nome_empresa}
                                placeholder="Miaudote"
                                name="nome_empresa"
                                id="nome_empresa"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="cnpj">CNPJ</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                defaultValue={values.cnpj}
                                placeholder="19.522.543/0001-05"
                                name="cnpj"
                                id="cnpj"
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left mt-2">
                        <Col xs={2}>
                            <Button variant="outline-primary" onClick={this.props.prevStep}>Voltar</Button>
                        </Col>
                        <Col xs={2}>
                            <Button variant="outline-primary" onClick={this.continue}>Próxima</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default companyPersonalInfo
