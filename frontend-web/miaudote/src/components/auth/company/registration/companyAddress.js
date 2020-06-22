import React, { Component } from 'react'
import Axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap'
import InputMask from 'react-input-mask'
import Company from '../../../../api/company'
import RemoveMask from '../../../../validations/RemoveMask';

const apiCompany = new Company()
const rmvMask = new RemoveMask()

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

    createCompany = () => {
        const { state } = this.props
        const company = {
            nome_representante: state.nome_representante,
            email_representante: state.email_representante,
            celular_representante: rmvMask.trimMaskCell(state.celular_representante),
            razao_social: state.razao_social,
            nome_empresa: state.nome_empresa,
            cnpj: rmvMask.trimMaskCnpj(state.cnpj),
            telefone: rmvMask.trimMaskCell(state.telefone),
            cep: rmvMask.trimMaskCep(state.cep),
            cidade: state.cidade,
            bairro: state.bairro,
            logradouro: state.logradouro,
            numero: state.numero,
            complemento: state.complemento,
            uf: state.uf,
            id_tipo_servico: state.id_tipo_servico,
            url_logo: state.url_logo,
            permissions: state.permissions,
            senha: state.senha
        }
        if (apiCompany.createCompany(company)) {
            return (
                alert("created with success!")
            )
        } else {
            return (
                alert("failed meanwhile creating")
            )
        }
    }

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    SeachCep = (event) => {
        // stop at this issue
        var cep = rmvMask.trimMaskCep(rmvMask.trimSlash(event.target.value))
        if (cep.length >= 8) {
            let startUrl = "https://viacep.com.br/ws/";
            let endUrl = "/json/";
            const midCep = cep;
            const finalUrl = startUrl + midCep + endUrl
            Axios.get(finalUrl)
                .then(
                    (res) => {
                        const address = res.data
                        this.setState({[this.props.state.bairro] : address.bairro})
                        console.log("the address neighbourhood" + address.bairro + "the state neighbourhood " + this.props.state.bairro)
                    })
        }
    }

    render() {
        const { handleChange, state } = this.props;
        console.log(state)
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
                                name="cep"
                                defaultValue={state.cep}
                                onKeyUp={this.SeachCep}
                                onChange={handleChange}
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
                                placeholder="cidade"
                                name="cidade"
                                defaultValue={state.cidade}
                                onKeyUp={this.props.valInsert}
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
                                onKeyUp={this.props.valInsert}
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
                                onKeyUp={this.props.valInsert}
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
                                onKeyUp={this.props.valInsert}                                
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
                                onKeyUp={this.props.valInsert}                                
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
                                onKeyUp={this.props.valInsert}                                
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left">
                        <Col xs={3}>
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

