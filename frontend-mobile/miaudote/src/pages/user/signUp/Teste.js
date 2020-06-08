import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';



// const testando = (props) => {
//     const dentistas = props.dentistas
//     console.log(this.state)
// }


export default class Teste extends Component {

    constructor(props){
		super(props)
		const { params } = this.props.route.params
		this.state = {
			name: params.name,
		}
	}
    
    teste = () => {
		console.log('eu sou um TESTEEEEEE!!!!')

		console.log(this.state)
	}

    render(){
        console.log("Vim da tela teste" + this.state)
        return(
            <>
                <Text>teste</Text>
            </>
        )
    }


}