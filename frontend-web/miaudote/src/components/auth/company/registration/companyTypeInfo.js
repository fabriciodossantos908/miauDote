import React, { Component } from 'react'
import { servicesList } from '../../../../api/services'


export class companyBaseInfo extends Component {
    constructor(props) {
        super(props)

        this.state = this.props.state
    }

    // used to require all services types
    componentWillMount(){
        // const services = servicesList();
        // console.log(JSON.stringify(services));
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
                <button onClick={this.continue}>Próxima etapa</button>
            </div>

        )

    }
}

export default companyBaseInfo
