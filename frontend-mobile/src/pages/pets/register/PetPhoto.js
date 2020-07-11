import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, StatusBar, Text, Image } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput, RadioButton } from 'react-native-paper';

// import { Main, Header, Title, ContainerIcon, Form, ContainerCenter, IconView, IconImage } from './teste-styles'
import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconViewSmall, IconImage, IconViewMedium, IconViewBig } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { CheckBox } from "react-native-elements";
import { green, bold } from "colorette";
import colors from "../../../components/colors";



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
                            <ImageBackground source={require('../../../assets/head.png')} style={{ height: 50 }} imageStyle={{ resizeMode: 'cover' }} />
                            <Main>
                                <Header style={{ marginBottom: 8 }}>
                                    <Title>Envie uma foto</Title>
                                </Header>
                                <ContainerCenter>
                                    <ContainerIcon>
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#1bc7cb', width: '100%' }}></View>
                                    </ContainerIcon>
                                </ContainerCenter>

                                <Form style={{ alignItems: 'stretch' }}>
                                    <View style={{ width: '100%', justifyContent: "flex-start" }}>
                                        <Label style={{ color: '#8c8c8c', fontWeight: "bold", letterSpacing: 0.5, fontSize: 16.5 }}>
                                            Chegamos ao último passo!
                                        </Label>

                                        <Label style={{ textAlign: "justify", lineHeight: 23, marginTop:'7%'}}>
                                            Escolha a melhor foto
                                            {this.state.gender == 'M'? ' do ' : ' da '} 
                                            {this.state.name} e derreta corações <Icon name={'heart'} size={14} color={colors.pink} ></Icon>
					                    </Label>
                                    </View>

                                    <View style={styles.main}>
                                        <Image
                                            source={require('../../../assets/image2.png')}
                                            style={styles.avatar}
                                        />

                                        <TouchableOpacity style={styles.button}>
                                            <Text style={styles.buttonText}>Escolher imagem</Text>
                                        </TouchableOpacity>

                                    </View>
                                </Form>

                                <ContainerButton>
                                    <TouchableOpacity style={styles.btn} onPress={console.log(this.state)}>
                                        <BtnText>Finalizar</BtnText>
                                    </TouchableOpacity>
                                </ContainerButton>
                            </Main>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        height: 45,
        width: 130,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1bc7cb',
        borderRadius: 5,
        marginTop: -15
    },

    inputAge: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        width: '100%'
    },
    input: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        marginBottom: '13%',
        marginTop: 10
    },
    inputLarge: {
        backgroundColor: '#ffff',
        // height: 40,
        alignSelf: 'stretch',
        marginTop: 10
    },
    checkbox: {
        alignSelf: "center",
    }, main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 240,
        height: 45,
        borderRadius: 3,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#fc6b6e'
    },
    buttonFinalize: {
        width: 240,
        height: 45,
        borderRadius: 3,
        backgroundColor: "#1bc7cb",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#1bc7cb',
    },
    buttonText: {
        color: "#fc6b6e",
        fontSize: 15,
        fontWeight: "500"
    },
    buttonTextFinalize: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "500"
    },
    avatar: {
        // backgroundColor:'#ccc',
        width: 200,
        height: 200,
        bottom: 50,
        top: 20,
        marginBottom: 30
    },

    txtSkip: {
        color: '#afafaf',
        fontSize: 20,
        bottom: 5,
    },

    skipButton: {
        height: 40,
        width: 100,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    line: {
        borderBottomColor: '#1bc7cb',
        borderBottomWidth: 1,
        width: '80%'
    }
})
