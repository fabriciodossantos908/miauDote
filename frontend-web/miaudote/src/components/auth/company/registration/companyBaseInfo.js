import React, { Component } from 'react'
import '../../../../materialize/css/materialize.css'


export class companyBaseInfo extends Component {
    // Create the service options element
    ServiceOpt = () => {
        const service = this.servicesList()
        console.log(JSON.stringify(service))
    }

    valPassword(event) {
        const { senha } = this.props
        if (!senha === event.target.value) {
            alert("are the same")
        } else {
            alert("that's aren't the same")
        }
    }

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        return (
            <h1>Tá zerado</h1>
        )

    }
}

export default companyBaseInfo
