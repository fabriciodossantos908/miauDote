import React, { Component } from 'react'
import Axios from 'axios'

export class companyBaseInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services:''
        }
        this.state = this.props.state
    }

    // Create a new company
    createCompany = (company) => {
        Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/empresas/registrar',
        company)
            .then(
                (res) => {
                    res.status(201);
                });
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    componentWillMount() {
        const { values } = this.props
        console.log(values)
    }

    SendCompany = () => {
        const { values } = this.props
        try {
            this.createCompany(values);
            console.log("It's works!! ", values)
        } catch (error) {
            console.log("we have a problem!", error)
        }
        
    } 
    render() {
        const { values, handleChange, prevStep } = this.props
        return (
            <div>
                <h1>Cadastro de usuario</h1>
                <h2>Informções básicas</h2>
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
                <button onClick={this.SendCompany}>Criar</button>
            </div>

        )

    }
}

export default companyBaseInfo
