import React, { Component } from 'react'
// import CompanyForm from './companyForm'


export class companyBaseInfo extends Component {
    constructor(props){
        super(props);

        this.nextStep = this.props.nextStep.bind(this) 
    }
    continue = e => {
        e.preventDefault();
        // const values = this.props;
        //  values.nextStep;
        // this.props.nextStep();
        // CompanyForm.this.props.nextStep();
    }
    render() {
        // const  nextStep  = this.props
        
        const values  = this.props

        const {valuesTest} = this.props
        return (
            <React.Fragment>
            <div>
                <h1>Welcome to the first form!</h1>   
                <input defaultValue={console.log(values)}/>
                <input defaultValue={console.log(valuesTest)}/>
                <button onClick={this.props.nextStep()}>Próxima etapa</button>
            </div>
            </React.Fragment>
        )
    }
}

export default companyBaseInfo
