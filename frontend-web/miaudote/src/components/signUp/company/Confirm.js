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
                <h1>Confirmação de dados</h1>


                {/* Image field */}
                <label htmlFor="logo_empresa">Logo da empresa</label>
                <button onClick={prevStep}>Voltar</button>
                <button onClick={this.SendCompany()}>Criar</button>

            </div>

        )

    }
}