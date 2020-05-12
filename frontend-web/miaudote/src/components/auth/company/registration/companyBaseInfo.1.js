import React, { Component } from 'react'
// import CompanyForm from './companyForm'
export class companyBaseInfo extends Component {

    continue = e => {
         this.props.nextStep();
        // CompanyForm.this.props.nextStep();
    }
    render() {
        const values  = this.props
        const {valuesTest} = this.props
        return (
            
            <React.Fragment>
                <h1>Welcome to the first form!</h1>   
                <input defaultValue={console.log(JSON.stringify(values))}/>
                <input defaultValue={console.log(JSON.stringify(valuesTest))}/>
                <button onClick={this.continue}>próximo</button>
            </React.Fragment>
        )
    }
}

export default companyBaseInfo
