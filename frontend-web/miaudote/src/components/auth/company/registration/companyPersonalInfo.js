import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import InputMask from 'react-input-mask'

const Header = () => {
    return (
        <React.Fragment>
            <Container fluid="md">
                <Row className="justify-content-md-left" lg={8}>
                    <Col xs={6}>
                        <h1 className="font-italic">Informacões pessoais</h1>
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

companytype = () => {
    const service = this.seachType
    service()
}

render() {
    const { state, handleChange } = this.props;
    console.log(state)

    return (
        <React.Fragment>
            <Header />
            <Container >
                <Row className="justify-content-md-left">
                    <Col xs={3}>
                        <label htmlFor="celular_representante">Celular do representante</label>
                    </Col>
                    <Col xs={3} >
                        <InputMask
                            type="text"
                            mask="(99) 9 9999-9999"
                            maskChar="_"
                            defaultValue={state.celular_representante}
                            placeholder="(11) 9 9999-9999"
                            name="celular_representante"
                            id="celular_representante"
                            onKeyUp={this.props.valInsert}
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
                            mask="(99) 9999-9999"
                            maskChar="_"
                            defaultValue={state.telefone}
                            placeholder="(11) 9999-9999"
                            name="telefone"
                            id="telefone"
                            onKeyUp={this.props.valInsert}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-left">
                    <Col  xs={3}>
                        <label htmlFor="tipo_servico">tipo de segmento</label>
                    </Col>
                    <Col xs={3}>
                        <select>
                            <option value={state.id_tipo_servico}>Test 01</option>
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
                            defaultValue={state.razao_social}
                            placeholder="miaudote s.a"
                            name="razao_social"
                            id="razao_social"
                            onKeyUp={this.props.valInsert}
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
                            defaultValue={state.nome_empresa}
                            placeholder="Miaudote"
                            name="nome_empresa"
                            id="nome_empresa"
                            onKeyUp={this.props.valInsert}
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
                            beforeMaskedValueChange={this.beforeMaskedStateChange}
                            maskChar="_"
                            defaultValue={state.cnpj}
                            placeholder="99.999.999/9999-99"
                            name="cnpj"
                            id="cnpj"
                            onKeyUp={this.props.valInsert}
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
