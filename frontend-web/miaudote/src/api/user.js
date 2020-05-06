import React, { Component } from 'react'
import Axios from "axios";

export default class User extends Component {
    state = {
        user: []
    }

    // get users using axios 
    userList = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios')
            .then(
                (res) => {
                    this.setState.user = res.data;
                    // this.setState({user})
                })


    }

    // get users using fetch 
    userListFetch = async e => {
        const baseUrl = "http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios";
        try {
			let retorno =  await fetch(baseUrl)
			console.log(JSON.stringify(retorno))
            return retorno;
		        }catch(e) {
                    console.log(e)
                }
    }


    componentWillMount(){
        const user = this.userListFetch()
        console.log(user)
    }

    render() {
        return (
            <div>
                <input value="teste"/>
            </div>
        )
    }
}
