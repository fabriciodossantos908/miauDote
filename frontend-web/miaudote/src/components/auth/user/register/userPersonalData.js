import React, { Component } from 'react'

export default class pesonalData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dt_nasc: "",
            sexo: "",
            cpf: "",
            pesonalDataErrors: ""
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
                        type="date"
                        name="dt_nasc"
                        placeholder="data de nascimento"
                        value={this.state.dt_nasc}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="sexo"
                        placeholder="sexo"
                        value={this.state.sexo}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="cpf"
                        placeholder="cpf"
                        value={this.state.cpf}
                        onChange={this.handleChange}
                    />
                    <button type="submit" >Próximo</button>
                </form>
            </div>
        )
    }
}
