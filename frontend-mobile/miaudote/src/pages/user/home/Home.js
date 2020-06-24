import React, { Component } from 'react'
import { View, StyleSheet, Text, Alert, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class HomeTeste extends Component {


    constructor(props) {
        super(props)
        const { data } = this.props.route.params.params //capturando os valores passados por parametro 
		this.state = {
            name: data.name
			
        }
       
    }

    render () {
        return (
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text>Olá {this.state.name}!</Text>
            </View>
        );
    }





}