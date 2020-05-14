import React, { Component } from 'react'
import Axios from 'axios'

export class login extends Component {
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

    // Login function
    // pps: that's function will need to be the unique login function here, in this file
    login = () => {
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
                <h1>Login</h1>
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

                <button onClick={this.login}>Logar</button>
            </div>
        )
    }
}

export default login
