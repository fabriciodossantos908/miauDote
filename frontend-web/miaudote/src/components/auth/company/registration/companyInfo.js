import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            razao_social: "",
            nome_empresa: "",
            telefone: "",
            cnpj: "",
            // tipo_servico: {
            //     "id": 1,
            //     "nome": "Hotel para Pets",

            companyInfoErrors: ""
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log("form enviado!!");
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="nome"
                        value={this.state.nome}
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="celular"
                        placeholder="celular"
                        value={this.state.celular}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="cpf"
                        placeholder="cof"
                        value={this.state.cpf}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="cep"
                        placeholder="cep"
                        value={this.state.cep}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bairro"
                        placeholder="bairro"
                        value={this.state.bairro}
                        onChange={this.handleChange}
                    />

                    <button type="submit" > Criar</button>
                </form>
            </div>
        )
    }
}
