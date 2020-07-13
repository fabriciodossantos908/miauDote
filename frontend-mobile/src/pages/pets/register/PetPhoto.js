import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, Text, TouchableOpacity, ImageBackground, StatusBar, Image } from "react-native";

import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Header, Title, ContainerCenter, ContainerIcon, Form, ContainerText, LabelBold, JustifyText, ContainerPetImager, PetImage, ButtonNext, ButtonChooseImage, TxtButton } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { Heart } from "../../../components/icons";
import { HeaderDecoration, Head } from "./services/header";



export default class PetPhoto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Tom',
            gender:'M',
            age: '',
            porte: '',
            yearSelected: false,
            monthSelected: false,
            description: '',
            checked: ''
        }
    }

    nextPage = () => {
        console.log(this.state)
    }

    _onYearPress = () => {
        const { yearSelected } = this.state

        yearSelected == false ?
            this.setState({ yearSelected: true }) :
            this.setState({ yearSelected: false })
    }

    _onMonthPress = () => {
        const { monthSelected } = this.state

        monthSelected == false ?
            this.setState({ monthSelected: true }) :
            this.setState({ monthSelected: false })
    }

    render() {
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
                                    <ContainerText>
                                        <LabelBold>
                                            Chegamos ao último passo!
                                        </LabelBold>

                                        <JustifyText>
                                            Escolha a melhor foto
                                            {this.state.gender == 'M'? ' do ' : ' da '} 
                                            {this.state.name} e derreta corações <Heart/>
					                    </JustifyText>
                                    </ContainerText>

                                    <ContainerPetImager>
                                        <PetImage
                                            source={require('../../../assets/image2.png')}
                                        />
            
                                        <ButtonChooseImage>
                                            <TxtButton>Escolher imagem</TxtButton>
                                        </ButtonChooseImage>

                                    </ContainerPetImager>
                                </Form>

                                <ContainerButton>
                                    <ButtonNext onPress={console.log(this.state)}>
                                        <BtnText>Finalizar</BtnText>
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
