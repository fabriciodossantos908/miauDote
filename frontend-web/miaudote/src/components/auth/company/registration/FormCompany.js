import React, { Component } from 'react'
import CompanyBaseInfo from './companyBaseInfo'
import CompanyPersonalInfo from './companyPersonalInfo'
import CompanyAddress from './companyAddress'
import Home from '../../../../pages/home'

export class FormCompany extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Reveal the actually registration step
            step: 1,
            nome_representante: "",
            email_representante: "",
            celular_representante: "",
            razao_social: "",
            nome_empresa: "",
            cnpj: "",
            telefone: "",
            cep: "",
            cidade: "",
            bairro: "",
            logradouro: "",
            numero: "",
            complemento: "",
            uf: "",
            id_tipo_servico: "1",
            url_logo: "https://urlFotoTeste.jpg",
            permissions: "COMPANY",
            senha: "",
            senha_confirmation: "",
            company_error: ""
        }
        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    nextStep() {
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    };

    prevStep() {
        const { step } = this.state
        this.setState({
            step: step - 1
        });
    };


    // Replace the mask with empty

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { step } = this.state
        switch (step) {
            case 1:
                return (
                    <CompanyBaseInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        state={this.state}
                    />
                );
            case 2:
                return (
                    <CompanyPersonalInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        state={this.state}
                    />
                );
            case 3:
                return (
                    <CompanyAddress
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        state={this.state}
                    />
                );
            default: return <Home />
        }
    }
}

export default FormCompany