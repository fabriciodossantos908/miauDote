import React, { Component } from 'react'
import CompanyBaseInfo from './companyBaseInfo'
import CompanyPersonalInfo from './companyPersonalInfo'
import CompanyAddress from './companyAddress'
import Confirm from './Confirm'
import Sucess from './Sucess'
import Home from '../../../home'
import CompanyTypeInfo from './companyTypeInfo'



export class companyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Reveal the actually registration step
            step: 1,
            id: "",
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
            id_tipo_servico: "",
            url_logo: "https://urlFotoTeste.jpg",
            permissions: "COMPANY",
            // "tipo_servico": {
            //   "id": 1,
            //   "nome": "Hotel para Pets"
            // }
            senha: "",
            senha_confirmation: ""
        }
        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    // Go to next step
    nextStep() {
        const { step } = this.state
        const next = step + 1;

        this.setState({
            step: next
        });
    };

    // Go back to previous step
    prevStep() {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        const { step } = this.state
        const values = this.state;
        switch (step) {
            case 1:
                return (
                    <CompanyBaseInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        state={this.state}
                        values={values}
                    />
                );
            case 2:
                return (
                    <CompanyPersonalInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        step={step}
                    />
                );
            case 3:
                return (
                    <CompanyAddress
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );

            case 4:
                return (
                    <CompanyTypeInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 5:
                return (
                    <Confirm
                        // createCompany={this.sea}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 6:
                return (
                    <Sucess
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            default: return <Home />
        }
    }
}

export default companyForm