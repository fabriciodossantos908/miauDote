import colors from '../../../components/colors';
import React, { Component } from 'react';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StatusBar } from "react-native";

import { Label, Main, Form, ButtonNext } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';


// import BreedList from './component/BreedList';
import BreedList from './services/BreedList';
import { HeaderDecoration, Head } from './services/header';
import { alertinha } from './Testi';



export default class PetBreed extends Component {

    constructor(props) {
        super(props)
        // const { data } = this.props.route.params.params
        this.state = {
            // name: data.name,
            // gender: data.gender,
            // type: data.type,
            // uf: data.uf,
            // city: data.city,
            name: 'Tom',
            breed: '',
        }
    }

    nextPage = () => {
        this.props.navigation.navigate('Testi')
    }


    render(props) {
        const { search } = this.state;
        return (
            <React.Fragment>
                <StatusBar barStyle={'light-content'} backgroundColor='#FC6B6E' />
                <KeyboardAvoidingView
                    // behavior={Platform.OS == "ios" ? "padding" : "height"}
                    behavior={"height"}
                    style={{ flex: 1 }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <HeaderDecoration />
                            <Main>
                                <Head />

                                <Form style={{ alignItems: 'stretch' }}>
                                    <Label>Qual a raça do {this.state.name}?
                                        <Label style={{ color: colors.green }}>{this.props.breed}</Label>
                                    </Label>
                                    <BreedList  />
                                </Form>
                                <ContainerButton>
                                    <ButtonNext onPress={alertinha}>
                                        <BtnText>Próximo</BtnText>
                                    </ButtonNext>
                                </ContainerButton>
                            </Main>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </React.Fragment>
        )
    }
}




