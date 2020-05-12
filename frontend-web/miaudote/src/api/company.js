import { Component } from 'react'
import Axios from "axios";

export class Company extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: ""
        }

        // Check the options to bind
        this.companyList = this.companyList.bind(this);
        this.createCompany = this.createCompany.bind(this);
    }
    // get all company 
    companyList = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/empresa')
            .then(
                (res) => {
                    const company = res.data;
                    this.setState({ company })
                    console.log(JSON.stringify(company))

                });
    };

    // Create a new company
    createCompany = (company) => {
        Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/empresa', company)
            .then(
                (res) => {
                    res.status(201);
                });
    }
}
export default Company;