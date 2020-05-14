import React, { Component } from 'react'
// import CompanyForm from './companyForm'
import Axios from 'axios'

const Header = () => {
    return (
        <div>
            <h1>Cadastro de usuario</h1>
            <h2>Informções básicas</h2>
        </div>
    )
}

export class companyBaseInfo extends Component {

    // Getting all services
    servicesList = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/servicos')
            .then(
                (res) => {
                    const services = res.data;
                    this.setState({ services })
                    console.log(JSON.stringify(services))
                })
    }

    // Create the service options element
    ServiceOpt = () => {
        const service = this.servicesList()
        console.log(JSON.stringify(service))

    }

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    componentWillMount() {
        const { values } = this.props
        console.log(values)
    }



    render() {
        const { values, handleChange } = this.props
        // const { servicesList } =this.props
        // console.log(values)
        return (
            <div>
                
                <Header/>
                <label htmlFor="nome_representante">Nome do representante</label>
                <input
                    type="text"
                    defaultValue={values.nome_representante}
                    placeholder="pedro"
                    name="nome_representante"
                    id="nome_representante"
                        onChange={handleChange}
                />

                <label htmlFor="email_representante">Email do representante</label>
                <input
                    type="email"
                    defaultValue={values.email_representante}
                    placeholder="pedro@miaudote.com"
                    name="email_representante"
                    id="email_representante"
                    onChange={handleChange}
                />

                <label htmlFor="senha">Senha</label>
                <input
                    type="password"
                    defaultValue={values.senha}
                    placeholder="senha"
                    name="senha"
                    id="senha"
                    onChange={handleChange}
                />

                <label htmlFor="senha_confirmation">repita a Senha</label>
                <input
                    type="password"
                    defaultValue={values.senha_confirmation}
                    placeholder="Repita a senha"
                    name="senha_confirmation"
                    id="senha_confirmation"
                    onChange={handleChange}
                />
                {/* <input defaultValue={console.log(valuesTest)} /> */}
                <button onClick={this.continue}>Próxima etapa</button>
            </div>

        )

    }
}

export default companyBaseInfo
