import React, { Component } from 'react'
export default class FormBaseInfo extends Component {


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


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