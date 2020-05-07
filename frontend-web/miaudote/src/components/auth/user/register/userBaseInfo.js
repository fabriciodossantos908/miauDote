import React, { Component } from 'react'
import { Axios } from "axios";

// verificar o local de post
// import User from "../../../../api/user";
export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Importing the user
            // user: User,
            nome: "",
            email: "",
            celular: "",
            senha: "",
            senha_confirmation: "",
            userInfoErrors: ""
        }

        // const userList = User.bind(this);
        // console.log(userList);

        // bind in the functions
        this.searchCep = this.searchCep.bind(this);
    }


    handleChange(event) {
        // event.target.value = User.user;
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    componentWillMount() {
        // pegando os métodos do user
        // const userInto = this.userList
        // console.log(userInto);
    }
    // making the get of viacep api, using the user cep 
    handleSubmit(event) {
        console.log(Axios.get('https://viacep.com.br/ws/01001000/json/'));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
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
                    <button type="submit">Próximo</button>
                </form>
            </div>
        )
    }
}
