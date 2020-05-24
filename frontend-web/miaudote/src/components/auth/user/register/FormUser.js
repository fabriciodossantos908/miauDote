import React, { Component } from 'react'
import FormUserBaseInfo from './FormUserBaseInfo'
import FormPersonalInfo from './FormPersonalInfo'
import Home from '../../../../pages/home'

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            nome: "",
            email: "",
            celular: "",
            senha: "",
            data_nascimento: "",
            sexo: "",
            cpf: "",
            cep: "",
            cidade: "",
            bairro: "",
            logradouro: "",
            uf: "",
            url_foto: "",
            permissions: "USER",
            senha_confirmation: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.nextStep = this.nextStep.bind(this)
    }

    nextStep() {
        const { step } = this.state
        const next = step + 1;

        this.setState({
            step: next
        });
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { step } = this.state
        const state = this.state
        switch (step) {
            case 1:
                return (
                    <FormUserBaseInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        state={state}
                    />
                );
            case 2: {
                return (
                    <FormPersonalInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        state={state}
                    />

                );
            }
            default: return <Home />
        }
    }
}
