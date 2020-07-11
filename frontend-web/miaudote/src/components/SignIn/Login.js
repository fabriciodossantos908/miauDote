import React, { Component } from 'react'

export class CompanyLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            senha: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    render() {

        return (
            <h1>Tá zerado</h1>
        )
    }
}

export default CompanyLogin
