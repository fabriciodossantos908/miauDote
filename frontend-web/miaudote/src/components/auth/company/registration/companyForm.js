import React, { Component } from 'react'
import CompanyBaseInfo from './companyBaseInfo'
import CompanyPersonalInfo from './companyPersonalInfo'
import CompanyAddress from './companyAddress'
import Confirm from './Confirm'
import Sucess from './Sucess'
import Home from '../../../home'
// import { User } from '../../../../api/user'



export class companyForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            // Reveal the actually registration step
            step: 1,
            values: {
                id: "",
                nome_representante: "Carlos ribeiro",
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
                url_logo: "",
                permissions: "",
                // "tipo_servico": {
                //   "id": 1,
                //   "nome": "Hotel para Pets"
                // }
                senha: "",
                senha_confirmation: ""
            }
        }
        this.nextStep =  this.nextStep.bind(this)
        this.prevStep =  this.prevStep.bind(this)
    }
    // Go to next step
    nextStep() {
        // const step = 1;
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
        const { values } = this.state;
        const valuesTest = this.state.values
        switch (step) {
            case 1:
                return (
                    <CompanyBaseInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        state={this.state}
                        values={values}
                        valuesTest={valuesTest}
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
                    <Confirm
                        // createCompany={this.sea}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 5:
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