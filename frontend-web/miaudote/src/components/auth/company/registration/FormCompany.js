import React, { Component } from 'react'
import CompanyBaseInfo from './companyBaseInfo'
import CompanyPersonalInfo from './companyPersonalInfo'
import CompanyAddress from './companyAddress'
<<<<<<< HEAD
// import Sucess from './Sucess'
import Home from '../../../home'
import CompanyTypeInfo from './Confirm'
// import Services from '../../../../api/services'

=======
import Home from '../../../../pages/home'
import CompanyTypeInfo from './companyTypeInfo'
// import CheckInput from '../../../validations/CheckInput'
>>>>>>> 50ffba82e83b4d2e34abd08d35932fb57d2815d8

export class FormCompany extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Reveal the actually registration step
            step: 1,
            values: {
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
            senha: ""
            },
            senha_confirmation: "",
            company_error: ""
        }
        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    nextStep() {
        const {step} = this.state
        this.setState({
            step: step + 1
        });
    };

    

    prevStep() {
        const {step} = this.state
        this.setState({
            step: step - 1
        });
    };

    // change the state when was inserted anything
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        // const service = this.props
        const { step } = this.state
        const values = this.state
        switch (step) {
            case 1:
                return (
                    <CompanyBaseInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        state={this.state}
                        values={values}
                        // services={service}
                    />
                );
            case 2:
                return (
                    <CompanyPersonalInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <CompanyAddress
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 4:
                return (
                    <CompanyTypeInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            default: return <Home />
        }
    }
}

export default FormCompany