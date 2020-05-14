import React, { Component } from 'react'

export default class CompanyAddress extends Component {

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        // console.log(values)
        return (
            <div>
                <h1>Endereço</h1>
                <h2>Como os seus clientes podem lhe encontrar</h2>
                <div>
                    <input
                        type="text"
                        name="cep"
                        placeholder="cep"
                        defaultValue={values.cep}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="cidade"
                        placeholder="cidade"
                        defaultValue={values.cidade}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bairro"
                        placeholder="jardim boas novas"
                        defaultValue={values.bairro}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="logradouro"
                        placeholder="alameda trakinas"
                        defaultValue={values.logradouro}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="numero"
                        placeholder="500"
                        defaultValue={values.numero}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="complemento"
                        placeholder="complemento"
                        defaultValue={values.complemento}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="uf"
                        placeholder="uf"
                        defaultValue={values.uf}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={this.props.prevStep}>Voltar</button>
                <button onClick={this.continue}>Próximo</button>
            </div>
        )
    }
}

