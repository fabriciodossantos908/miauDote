import React, { Component } from 'react'
import FormUserBaseInfo from './FormUserBaseInfo'
import FormPersonalInfo from './FormPersonalInfo'
import Home from '../../../home'


export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Importing the user
            // user: User,
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

        {/* <input
                        type="text"
                        name="nome"
                        placeholder="nome"
                        onChange={this.searchCep}
                        value={this.state.nome}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                    />
                    <input
                        type="text"
                        name="celular"
                        placeholder="celular"
                        value={this.state.celular}
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="senha"
                        value={this.state.senha}
                    />
                    <input
                        type="password"
                        name="senha_confirmation"
                        placeholder="repita a senha"
                        value={this.state.senha_confirmation}
                    />
                    <button type="submit">Próximo</button> */}
    }
}
