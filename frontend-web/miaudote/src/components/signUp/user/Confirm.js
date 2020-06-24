import React, { Component } from 'react'
export default class UserAddress extends Component {
  
        handleChange = this.handleChange.bind(this)


    // Seach cep 
    searchCep(event) {
        const cepUrl = "https://viacep.com.br/ws/";
        const ResponseFormat = "/json/";
        const cep = event.target.value;
        console.log(cepUrl + cep + ResponseFormat);
        // Axios.get(cepUrl + cep + ResponseFormat)
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
                        name="cep"
                        placeholder="cep"
                        value={this.state.cep}
                        onChange={this.searchCep}
                    />
                    <input
                        type="email"
                        name="cidade"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bairro"
                        placeholder="celular"
                        value={this.state.celular}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="logradouro"
                        placeholder="cof"
                        value={this.state.cpf}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="uf"
                        placeholder="cep"
                        value={this.state.cep}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="numeroCasa"
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
