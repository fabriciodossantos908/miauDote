import React, { Component } from 'react'
import { View, StyleSheet, Text, Alert, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView, ImageBackground } from 'react-native';

export default class HomeTeste extends Component {


    constructor(props) {
        super(props)
        const { data } = this.props.route.params.params //capturando os valores passados por parametro 
		this.state = {
            name: data.name,
            email: data.email
            // email:'joannaregina1@gmail.com'
        }
       
    }

    render () {
        return (
            <View style={{flex:1}}>
                {/* <Text>Olá {this.state.name}!</Text> */}
                <ImageBackground  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} source={require('../../../assets/email.png')}>
                    <Text style={{top:100}}>Confirme o email: {this.state.email}</Text>
                </ImageBackground>
            </View>
        );
    }





}