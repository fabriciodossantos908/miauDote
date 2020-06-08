import React, { Component } from 'react'
import FormUserInitialInfo from './FormUserInitialnfo'
import FormPersonalInfo from './FormUserPersonalInfo'
import FormUserAddress from './FormUserAddress'
import Confirm from './Confirm'
import Home from '../../../../pages/home'
import '../../../../api/cep'
import Cep from '../../../../api/cep';

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
        this.prevStep = this.prevStep.bind(this)
    }

    nextStep() {
        const { step } = this.state
        const next = step + 1;

        this.setState({
            step: next
        });
    };

    prevStep() {
        const { step } = this.state
        const prev = step - 1;

        this.setState({
            step: prev
        });
        return console.log("Should make you go back")
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
            case 1: return (
                < FormUserInitialInfo
                    seachCep={Cep}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    state={state}
                />
            );
            case 2: {
                return (
                    <FormPersonalInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        state={state}
                    />

                );
            }
            case 3: {
                return (
                    <FormUserAddress
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        state={state}
                    />

                );
            }
            case 4: {
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        state={state}
                    />

                );
            }
            default: return <Home />
        }
    }
}
