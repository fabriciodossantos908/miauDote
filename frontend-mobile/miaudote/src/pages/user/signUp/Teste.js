import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';



// const testando = (props) => {
//     const dentistas = props.dentistas
//     console.log(this.state)
// }


export default class Teste extends Component {

    constructor(props) {
		super(props)
		this.state = {
			email: '',
			senha: ''
		}
    }
    
    teste = () => {
		console.log('eu sou um TESTEEEEEE!!!!')

		console.log(this.state)
	}

    render(){

        

        return(
            <>
                <Text>teste</Text>
            </>
        )
    }


}