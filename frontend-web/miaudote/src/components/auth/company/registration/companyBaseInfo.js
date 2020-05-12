import React, { Component } from 'react'
// import CompanyForm from './companyForm'


export class companyBaseInfo extends Component {
    constructor(props) {
        super(props)

        this.state = this.props.state
    }

    componentWillMount(){
        console.log(JSON.stringify(this.state));
    }

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props
        // console.log(values)
        return (
            <div>
                <h1>Cadastro de usuario</h1>
                <h2>Informções básicas</h2>
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
