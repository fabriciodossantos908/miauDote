import React, { Component } from 'react'
import Axios from "axios";

export class User extends Component {
    

    // get users using axios 
    userList = () => {
        Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios')
            .then(
                (res) => {
                    const user = res.data;
                    this.setState({user})
                    console.log(JSON.stringify(user))

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
        this.setState.user = this.userList()
        // console.log(user)
    }

    render() {
        return (
            <div>
                <User userList={this.userList}/>;

            </div>
        );
    }
}
export default User;