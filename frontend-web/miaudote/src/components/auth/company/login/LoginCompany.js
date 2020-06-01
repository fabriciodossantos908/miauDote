import React, { Component } from 'react'
import Axios from 'axios'

export class loginCompany extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cnpj: '',
            senha: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }


    // Auth method 
    // ps: make this separetely please!! For your code be healthy
    AuthCompany = (authInfo) => {
        Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/empresas/autenticar', authInfo)
            .then(
                (res) => {
                    console.log("Company Authenticated!!", res.data)
                }
            )
    }

    // LoginCompany function
    // pps: that's function will need to be the unique loginCompany function here, in this file
    loginCompany = () => {
        console.log("inside the method")
        try {
            const authInfo = this.state

            if (this.AuthCompany(authInfo)) {
                console.log("everthing are going good!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const values = this.state
        return (
            <div>
                <h1>LoginCompany</h1>
                <label htmlFor="cnpj">CNPJ</label>
                <input
                    defaultValue={values.cnpj}
                    onChange={this.handleChange}
                    name="cnpj"
                    id="cnpj"
                />
                <label htmlFor="senha">senha</label>
                <input
                    defaultValue={values.senha}
                    onChange={this.handleChange}
                    name="senha"
                    id="senha"
                />

                <button onClick={this.loginCompany}>Logar</button>
            </div>
        )
    }
}

export default loginCompany
