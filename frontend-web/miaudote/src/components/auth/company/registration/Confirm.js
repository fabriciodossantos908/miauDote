import React, { Component } from 'react'
import Axios from 'axios'

export class companyTypeInfo extends Component {
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
                    console.log("created!")
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
                <h1>Confirmação de dados</h1>
            </div>

        )

    }
}

export default companyTypeInfo
