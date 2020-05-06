import { Component } from 'react'
import Axios from "axios";

export default class user extends Component {
    state = {
        user: []
    }

    userList = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios')
            .then(res => {
                user = res.data;
                this.setState({user})
            })
    }


}
