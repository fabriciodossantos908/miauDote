import React, { Component } from 'react'
import { View, StyleSheet, Text, Alert, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class HomeTeste extends Component {

    constructor(props) {
        super(props)
        const { name } = this.props.route.params.params._string //capturando os valores passados por parametro 
		this.state = {
            name: name
			// email: params.email,
			// password : params.password,
			// name: '',
			// birthDate : '',
			// gender: '',
			// cpf: '',
			// // ddd: '',
            // phone: '' 
        }
       
    }

    _parametros = () => {
        let data = JSON.stringify(this.props.route.params.params._string) //tranfotmando parametros em string
       console.log("parametros " + data)
       console.log(this.state)
    //    alert (this.state)
    }


    render () {
        // alert("estado " + JSON.stringify(this.state))
        return (
            <View style={{flex:1, justifyContent:"center"}}>
                <Text>Olá: {this.state.name} </Text>
                <Button title="Click me" onPress={this._parametros}></Button>
            </View>
        );
    }


}
