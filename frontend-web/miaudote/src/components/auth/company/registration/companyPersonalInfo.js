import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Axios from 'axios'
import InputMask from 'react-input-mask'

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

    // This function need to be async on code
    seachType = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/servicos')
            .then(
                (res) => {
                    const services = res.data;
                    console.log(JSON.stringify(services))
                })
    }

    // same async with seachtype
    companytype = () => {
        const service = this.seachType
        service() 
        // call the api service uri
    }

    componentWillMount() {
        const service = this.seachType
        service() 

    }
    render() {
        const { values, handleChange } = this.props;
        console.log(values);
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="celular_representante">Celular do representante</label>
                        </Col>
                        <Col xs={3}>
                            <InputMask
                                type="text"
                                mask="+55 (99) 9 9999-9999"
                                maskChar="_"
                                defaultValue={values.celular_representante}
                                placeholder="(11) 9 9999-9999"
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
                            <InputMask
                                type="text"
                                mask="(11) 9999-9999"
                                maskChar="_"
                                defaultValue={values.telefone}
                                placeholder="(11) 9999-9999"
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
                                <option>Test 01</option>
                                <option>Test 02</option>
                                <option>Test 03</option>
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
                            <InputMask
                                type="text"
                                mask="99.999.999/9999-99"
                                maskChar="_"
                                defaultValue={values.cnpj}
                                placeholder="99.999.999/9999-99"
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
            </React.Fragment>
        )
    }
}

export default companyPersonalInfo
