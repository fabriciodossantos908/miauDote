import Axios from "axios";

export class Services {
    // get servicess using axios 

    servicesList = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/servicos')
            .then(
                (res) => {
                    const services = {tipo_servico: res.data};
                    console.log(JSON.stringify(services))
                })
    }

    createService = (service) => {
        Axios.post('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/servicos', service)
            .then(
                (res) => {
                    const company = {company: res.data};
                    return company
                }
            )
    }

}

export default Services;