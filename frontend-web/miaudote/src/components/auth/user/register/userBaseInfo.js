import React, { Component } from 'react'
import { Axios } from "axios";
// import {  User } from "../../../api/user";
export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            celular: "",
            senha: "",
            senha_confirmation: "",
            userInfoErrors: ""
        }


        this.searchCep = this.searchCep.bind(this);
    }
    
    searchCep(event) {
        const cepUrl =  "https://viacep.com.br/ws/"
        const ResponseFormat = "/json/"
        const cep = event.target.value
        console.log(cepUrl + cep + ResponseFormat);
        // Axios.get(cepUrl + cep + ResponseFormat)
    }

    handleChange(event) {
        // event.target.value = User.user;
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // making the get of viacep api, using the user cep 
    handleSubmit(event) {
        console.log(Axios.get('https://viacep.com.br/ws/01001000/json/'));
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="nome"
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
                    <button type= "submit">Próximo</button>
                </form>
            </div>
        )
    }
}
