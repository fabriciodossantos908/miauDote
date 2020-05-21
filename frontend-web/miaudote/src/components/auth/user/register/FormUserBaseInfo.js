import React, { Component } from 'react'
import { Axios } from "axios";

// verificar o local de post
// import User from "../../../../api/user";
export default class FormBaseInfo extends Component {


    handleChange(event) {
        // event.target.value = User.user;
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    componentWillMount() {
        // pegando os métodos do user
        // const userInto = this.userList'
        // console.log(userInto);
    }
    // making the get of viacep api, using the user cep 

    continue = e => {
        this.props.nextStep();
    }

    render() {
        const { state, handleChange } = this.props
        return (
            <div>
                <h1>Informações básicas</h1>
                <h2>Para começar seu login, preencha as seguintes Informações</h2>
                    <input
                        type="text"
                        name="nome"
                        placeholder="nome"
                        onChange={handleChange}
                        defaultValue={state.nome}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        defaultValue={state.email}
                    />
                    <input
                        type="text"
                        name="celular"
                        placeholder="celular"
                        onChange={handleChange}
                        defaultValue={state.celular}
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="senha"
                        onChange={handleChange}
                        defaultValue={state.senha}
                    />
                    <input
                        type="password"
                        name="senha_confirmation"
                        placeholder="repita a senha"
                        onChange={handleChange}
                        defaultValue={state.senha_confirmation}
                    />
                    <button onClick={this.continue}>Próximo</button>
            </div>
        )
    }
}