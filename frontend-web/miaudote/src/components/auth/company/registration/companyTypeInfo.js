import React, { Component } from 'react'
import Axios from 'axios'

export default class companyTypeInfo extends Component {
    constructor(props){
        super(props)
        this.SendCompany = this.SendCompany.bind(this)
    }


    SendCompany = () => {
        const { values } = this.props

        Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/empresas/registrar',
        values)
            .then(
                (res) => {
                    console.log("created!" + res.data)
                });

    }
    
    handleSubmit = () => {
        this.SendCompany()
    }
    render() {
        const { values, handleChange, prevStep } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>Cadastro de usuario</h1>
                <h2>Indivções básicas</h2>
                <label htmlFor="tipo_servico">tipo_servico</label>
                <select>
                    <option>teste</option>
                </select>
                <label htmlFor="email_representante">Email do representante</label>
                <input
                    type="email"
                    defaultValue={values.email_representante}
                    placeholder="pedro@miaudote.com"
                    name="email_representante"
                    id="email_representante"
                    onChange={handleChange}
                />

                {/* Image field */}
                <label htmlFor="logo_empresa">Logo da empresa</label>
                <button onClick={prevStep}>Voltar</button>
                <button onClick={this.SendCompany()}>Criar</button>
            </div>

        )

    }
}