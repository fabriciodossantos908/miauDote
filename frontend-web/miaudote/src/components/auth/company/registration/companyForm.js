import React, { Component } from 'react'
import CompanyBaseInfo from './companyBaseInfo'
import CompanyPersonalInfo from './companyPersonalInfo'
import CompanyAddress from './companyAddress'
import Confirm from './Confirm'
import Sucess from './Sucess'
import Home from '../../../home'

export class companyForm extends Component {
    state = {
        // Reveal the actually registration stage
        stage: 1,
        values: {
            id: "",
            nomeRepresentante: "Carlos ribeiro",
            emailRepresentante: "",
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

    // Go to next step
    nextStep() {
        const { step } = this.state;
        this.setState({
            step: step + 1
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
        const { stage } = this.state
        const { nomeRepresentante, emailRepresentante } = this.state;
        const valuesTest = this.state.values
        const values = { nomeRepresentante, emailRepresentante };
        switch (stage) {
            case 1:
                return (
                    <CompanyBaseInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
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