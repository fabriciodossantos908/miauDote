import React, { Component } from 'react'

export class companyPersonalInfo extends Component {

    componentWillMount() {
        const { step } = this.props
        console.log(step)
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <h1>Informacões pessoais</h1>
                <h2>Dados da empresa</h2>

                <label htmlFor="celular_representante">Celular do representante</label>
                <input
                    type="text"
                    defaultValue={values.celular_representante}
                    placeholder="(11) 911211-1231"
                    name="celular_representante"
                    id="celular_representante"
                    onChange={handleChange}
                />

                <label htmlFor="celular_representante">Telefone</label>
                <input
                    type="text"
                    defaultValue={values.telefone}
                    placeholder="(11) 51211-1231"
                    name="telefone"
                    id="telefone"
                    onChange={handleChange}
                />

                <label htmlFor="razao_social">Razão social</label>
                <input
                    type="text"
                    defaultValue={values.razao_social}
                    placeholder="miaudote s.a"
                    name="razao_social"
                    id="razao_social"
                    onChange={handleChange}
                />

                <label htmlFor="nome_empresa">Nome da empresa</label>
                <input
                    type="text"
                    defaultValue={values.nome_empresa}
                    placeholder="Miaudote"
                    name="nome_empresa"
                    id="nome_empresa"
                    onChange={handleChange}
                />

                <label htmlFor="cnpj">CNPJ</label>
                <input
                    type="text"
                    defaultValue={values.cnpj}
                    placeholder="19.522.543/0001-05"
                    name="cnpj"
                    id="cnpj"
                    onChange={handleChange}
                />

                <button onClick={this.props.prevStep}>Voltar</button>
                <button onClick={this.props.nextStep}>Próxima</button>
            </div>
        )
    }
}

export default companyPersonalInfo
