import { Component } from 'react';
import Axios from 'axios';

export class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
    };

    this.getUsers = this.getUsers.bind(this);
  }
  // get users using axios
  getUsers = () => {
    Axios.get(
      'http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios',
    ).then((res) => {
      const user = res.data;
      this.setState({ user });
      console.log(JSON.stringify(user));
    });
  };
}
export default User;
