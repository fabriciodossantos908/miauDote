import React, { Component } from 'react'

export class companyPersonalInfo extends Component {

    // Going to the next step with all saved
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    companytype = () => {
        const service = this.seachType
        service()
    }

    render() {

        return (
            <React.Fragment>
                <h1>Tá zerado</h1>
            </React.Fragment>
        )
    }
}

export default companyPersonalInfo
