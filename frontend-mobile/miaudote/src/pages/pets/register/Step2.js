import React, { Component } from 'react';

import { View, Text, Image, Button, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { Main, Tittle, Container, SubTittle, IconContainer, ContainerCenter, Form, Label } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Step2 extends Component{

    render(){
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                // behavior={"height"}
                style={{flex: 1}}
            >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <Container style={{backgroundColor:'#fc6b6e'}}>
                <Tittle>Cadastre seu pet</Tittle>
                <Main>
                    <ContainerCenter>
                        <SubTittle>Que bom que você tomou essa decisão</SubTittle>
                        <IconContainer>
                            <Icon name="paw" size={18} color="#ccc"> </Icon>
                            <Icon name="paw" size={18} color="#ccc"> </Icon>
                            <Icon name="paw" size={18} color="#ccc"> </Icon>
                        </IconContainer>
                    </ContainerCenter>

                    
                    <Form>
                        <Label>Informe o nome do seu pet:</Label>

            
                        {/* <Text>oi</Text>
                        <Text>oi</Text>
                        <Text>oi</Text>
                        <Text>oi</Text>
                        <Text>oi</Text>
                        <Text>oi</Text> */}
                    </Form>
                </Main>

            </Container>
            </ScrollView>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        )
    }
} 