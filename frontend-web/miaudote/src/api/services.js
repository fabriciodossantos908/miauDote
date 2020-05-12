import { Component } from 'react'
import Axios from "axios";

export class Services extends Component {
    constructor(props){
        super(props);

        this.state = {
            services: []
        }

        this.servicesList = this.servicesList.bind(this);
    }
    // get servicess using axios 
    servicesList = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/servicos')
            .then(
                (res) => {
                    const services = res.data;
                    this.setState({services})
                    console.log(JSON.stringify(services))
                })
    }

    createService =(service) => {
        Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/servicos', service)
            .then(
                (res) => {
                    res.status(201);
                }
            )
    }

}
export default Services;