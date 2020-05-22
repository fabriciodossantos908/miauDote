import React, { Component } from 'react'

export default class pesonalData extends Component {
    render() {
        const { values, handleChange } = this.props;

        return (
            <div>
                <input
                    type="date"
                    name="dt_nasc"
                    placeholder="data de nascimento"
                    value={values.data_nascimento}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="sexo"
                    placeholder="sexo"
                    value={values.sexo}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="cpf"
                    placeholder="cpf"
                    value={values.cpf}
                    onChange={handleChange}
                />
                <button> Próximo </button>
            </div>
        )
    }
}
