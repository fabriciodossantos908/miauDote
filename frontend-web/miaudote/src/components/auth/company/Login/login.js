import React, { Component } from 'react'

export class login extends Component {
    state = {
        cnpj: '',
        senha: ''
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
        try {
            const authInfo = this.state

            if (this.AuthCompany(authInfo)) {
                console.log("evething are going nice!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = () => {
        console.log("filled that with code folk!")
    }

    render() {
        const values = this.state
        return (
            <div>
                <input
                    defaultValue={values.cnpj}
                    onChange={this.handleChange}
                    name="cnpj"
                />
                <input
                    defaultValue={values.senha}
                    onChange={this.handleChange}
                    name="senha"
                />

            </div>
        )
    }
}

export default login
