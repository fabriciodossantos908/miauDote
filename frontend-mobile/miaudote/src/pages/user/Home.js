import React, { Component } from 'react'
import { View, StyleSheet, Text, Alert, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class HomeTeste extends Component {


    constructor(props) {
        super(props)
        const { params } = this.props.route.params //capturando os valores passados por parametro 
		this.state = {
            name: 'joanna'
			
        }
       
    }

    render () {
        return (
            <View>
                <Text>Olá: {this.state.name}</Text>
            </View>
        );
    }





}