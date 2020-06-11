import React, { Component } from 'react'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'
import Axios from 'axios'
import InputMask from 'react-input-mask'
import Company from '../../../../api/company'

const apiCompany = new Company()

const Header = () => {
    return (
        <React.Fragment>
            <Container fluid="md">
                <Row className="justify-content-md-left" lg={8}>
                    <Col xs={6}>
                        <h1>Endereço</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-left" lg={8}>
                    <Col xs={6}>
                        <h2>Como os seus clientes podem lhe encontrar</h2>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default class CompanyAddress extends Component {

    //validation create user (create with success !).

    createCompany = () => {
        const { state, trimMask } = this.props
        const company = {
            nome_representante: state.nome_representante,
            email_representante: state.email_representante,
            celular_representante: state.celular_representante,
            razao_social: state.razao_social,
            nome_empresa: state.nome_empresa,
            cnpj: state.cnpj,
            telefone: trimMask(state.telefone),
            cep: state.cep,
            cidade: state.cidade,
            bairro: state.bairro,
            logradouro: state.logradouro,
            numero: state.numero,
            complemento: state.complemento,
            uf: state.uf,
            id_tipo_servico: state.id_tipo_servico,
            url_foto: state.url_foto,
            permissions: state.permissions,
            senha: state.senha
        }
        if (apiCompany.createCompany(company)) {
            return (<Alert>Company created!</Alert>)
        } else {
            return (<Alert>Ins't possible to create a company!</Alert>)
        }

    }

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    SeachCepStart = (event) => {
        const baseUrl = {
            start: 'https://viacep.com.br/ws/',
            midCep: '',
            end: '/json/'
        }
        baseUrl.midCep = event.target.value
        console.log(baseUrl.midCep)
        baseUrl.midCep.length === 8
            ? Axios.get(baseUrl.start + baseUrl.midCep + baseUrl.end)
                .then(
                    (res) => {
                        console.log("Are inside the if" + res.data)
                    }
                )
            : console.log("Ins't on the if: " + baseUrl.midCep)

    }

    // Pick the cep require and display on address fields
    showPlace = () => {
        this.setState({
        })
    }

    render() {
        const { handleChange, trimMask, state } = this.props;
        return (
            <div>
                <Header />
                <Container variant='primary'>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="">Cep</label>
                        </Col>
                        <Col xs={3}>
                            <InputMask
                                type="text"
                                mask="99999-999"
                                maskChar="_"
                                placeholder="cep"
                                defaultValue={state.cep}
                                onChange={handleChange}
                                onKeyUp={trimMask}
                            // onKeyUp={this.SeachCepStart}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="">Cidade</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                name="cidade"
                                placeholder="cidade"
                                defaultValue={state.cidade}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="">Bairro</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                name="bairro"
                                placeholder="jardim boas novas"
                                defaultValue={state.bairro}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="">Logradouro</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                name="logradouro"
                                placeholder="alameda trakinas"
                                defaultValue={state.logradouro}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="">Número</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                name="numero"
                                placeholder="500"
                                defaultValue={state.numero}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="">Complemento</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                name="complemento"
                                placeholder="complemento"
                                defaultValue={state.complemento}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <label htmlFor="">Uf</label>
                        </Col>
                        <Col xs={3}>
                            <input
                                type="text"
                                name="uf"
                                placeholder="uf"
                                defaultValue={state.uf}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
                            <Button variant="outline-primary" onClick={this.SeachCep}>cep</Button>
                            <Button variant="outline-primary" onClick={this.SeachCepStart}>cep start</Button>
                            <Button variant="outline-primary" onClick={this.props.prevStep}>Voltar</Button>
                        </Col>
                        <Col xs={3}>
                            <Button variant="outline-primary" onClick={this.createCompany}>Criar</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

