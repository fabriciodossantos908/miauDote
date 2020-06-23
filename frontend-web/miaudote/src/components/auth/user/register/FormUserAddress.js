import React, { Component } from 'react'
import Cep from '../../../../api/cep'
import Axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import RemoveMask from '../../../../validations/RemoveMask'

const rmvMask = new RemoveMask()

const CepApi = new Cep()


export default class UserAddress extends Component {


    createUser = () => {

        this.SendCompany()
            // alert("usuário cadastrado!.")
    }

    SendCompany = () => {
        const { state } = this.props

        const user = {
            nome: state.nome,
            email: state.email,
            celular: rmvMask.trimMaskCell(state.celular),
            cep: rmvMask.trimMaskCep(state.cep),
            cidade: state.cidade,
            bairro: state.bairro,
            logradouro: state.logradouro,
            numero: state.numero,
            complemento: state.complemento,
            uf: state.uf,
            url_logo: state.url_logo,
            permissions: state.permissions,
            senha: state.senha
        }

        Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuario/registrar',
            user)

            .then(
                (res) => {
                    console.log("created!" + res.data)
                });
        
    }
    consultCep(event) {
        const address = CepApi.getAddress()

        this.setState({
            [event.target.name.bairro]: address.bairro
        })
    }

    render() {
        const { state, handleChange, validInsert } = this.props
        return (
            <div>
                <Container>
                    <Row>
                        <h1>
                            Seu endereco
                        </h1>
                    </Row>
                    <Row>
                        <h2>Etapa:{state.step}</h2>
                    </Row>
                </Container>
                <Container className="mt-1 mr-5 al-center">
                    <Row>
                        <label>Cep</label>
                    </Row>
                    <Row>
                        <InputMask
                            type="text"
                            mask="99999-999"
                            maskChar="_"
                            name="cep"
                            placeholder="cep"
                            value={state.cep}
                            onChange={handleChange}
                            onKeyUp={validInsert}
                        />
                    </Row>
                    <Row xs={5}>
                        <Col>
                            <Row>
                                <label>Cidade</label>
                            </Row>
                            <Row>
                                <input
                                    type="text"
                                    name="cidade"
                                    placeholder="Osasco"
                                    value={state.cidade}
                                    onChange={handleChange}
                                    onKeyUp={validInsert}
                                />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <label>Bairro</label>
                            </Row>
                            <Row>
                                <input
                                    type="text"
                                    name="bairro"
                                    placeholder="jardins das macieiras"
                                    value={state.bairro}
                                    onChange={handleChange}
                                    onKeyUp={validInsert}
                                />
                            </Row>
                        </Col>
                    </Row>
                    <Row xs={5}>
                        <Col>
                            <Row>
                                <label>Logradouro</label>
                            </Row>
                            <Row>
                                <input
                                    type="text"
                                    name="logradouro"
                                    placeholder="logradouro"
                                    value={state.logradouro}
                                    onChange={handleChange}
                                    onKeyUp={validInsert}
                                />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <label>Numero da residência</label>
                            </Row>
                            <Row>
                                <input
                                    type="text"
                                    name="numero"
                                    placeholder="500"
                                    value={state.numero}
                                    onChange={handleChange}
                                    onKeyUp={validInsert}
                                />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <label>Estado</label>
                    </Row>
                    <Row>
                        <input
                            type="text"
                            name="uf"
                            placeholder="São Paulo"
                            defaultValue={state.uf}
                            onChange={handleChange}
                            onKeyUp={validInsert}
                        />
                    </Row>
                    <Button variant="outline-primary" onClick={this.createUser} > Criar</Button>
                </Container>
            </div>
        )
    }
}
