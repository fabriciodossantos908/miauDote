import React, { Component } from 'react'

export default class Registration extends Component {

    render() {
        const { values } = this.props;
        return (
            <div>
                <h1>Endereço</h1>
                <h2>Como os seus clientes podem lhe encontrar</h2>

                <input
                    type="text"
                    name="cep"
                    placeholder="cep"
                    defaultValue={values.cep}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="cidade"
                    placeholder="cidade"
                    defaultValue={values.cidade}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="numero"
                    placeholder="número"
                    defaultValue={values.bairro}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="numero"
                    placeholder="número"
                    defaultValue={values.logradouro}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="número"
                    placeholder="número"
                    defaultValue={values.numero}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="complemento"
                    placeholder="complemento"
                    defaultValue={values.complemento}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="uf"
                    placeholder="uf"
                    defaultValue={values.uf}
                    onChange={this.handleChange}
                />

                <button onClick={this.props.prevStep}>Voltar</button>
                <button onClick={this.props.nextStep}>Próximo</button>
            </div>
        )
    }
}
