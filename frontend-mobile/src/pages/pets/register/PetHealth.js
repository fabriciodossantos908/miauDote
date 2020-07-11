import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput, RadioButton } from 'react-native-paper';

// import { Main, Header, Title, ContainerIcon, Form, ContainerCenter, IconView, IconImage } from './teste-styles'
import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconViewSmall, IconImage, IconViewMedium, IconViewBig } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { CheckBox } from "react-native-elements";
import { green } from "colorette";
import colors from "../../../components/colors";



export default class PetHealth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Tom',
            age: '',
            porte: '',
            yearSelected: false,
            monthSelected: false,
            description: '',
            checked: ''
        }
    }

    nextPage = () => {
        // console.log(this.state)
        this.props.navigation.navigate('PetPhoto')
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
                                    <Title>Cadastre seu pet</Title>
                                </Header>
                                <ContainerCenter>
                                    <ContainerIcon>
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#1bc7cb', width: '100%' }}></View>
                                    </ContainerIcon>
                                </ContainerCenter>

                                <Form style={{ alignItems: 'stretch' }}>
                                    {/* <Label style={{ fontWeight: 'bold', letterSpacing: 0.4 }}>Estamos quase finalizando!</Label> */}

                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <View style={{}}>
                                            <Label style={{ top: 7 }}>
                                                Vacinado:
                                            </Label>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Label style={{ top: 7, color:colors.green }}>Sim</Label>
                                            <View style={{ marginBottom: 5 }}>
                                                <RadioButton
                                                    color={colors.green}
                                                    value="first"
                                                    status={'checked'}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row'}}>
                                            <Label style={{ top: 7, color:colors.pink }}>Não</Label>
                                            <View style={{ marginBottom: 5 }}>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: '8%' }}>
                                        <View style={{}}>
                                            <Label style={{ top: 7 }}>
                                                Vacinado:
                                            </Label>
                                        </View>

                                        <View style={{ flexDirection: 'row'}}>
                                            <Label style={{ top: 7, color:colors.green }}>Sim</Label>
                                            <View style={{ marginBottom: 5 }}>
                                                <RadioButton
                                                    color={colors.green}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row'}}>
                                            <Label style={{ top: 7, color:colors.pink }}>Não</Label>
                                            <View style={{ marginBottom: 5 }}>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: '8%' }}>
                                        <View style={{}}>
                                            <Label style={{ top: 7 }}>
                                                Vacinado:
                                            </Label>
                                        </View>

                                        <View style={{ flexDirection: 'row'}}>
                                            <Label style={{ top: 7, color:colors.green }}>Sim</Label>
                                            <View style={{ marginBottom: 5 }}>
                                                <RadioButton
                                                    color={colors.green}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row'}}>
                                            <Label style={{ top: 7, color:colors.pink }}>Não</Label>
                                            <View style={{ marginBottom: 5 }}>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </View>
                                        </View>

                                    </View>


                                    <View style={{ marginTop: '20%' }}>
                                        <Label>O Pet está precisando de cuidados veterinários?</Label>

                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '1%' }}>
                                            <View style={{ flexDirection: 'row'}}>
                                                <Label style={{ top: 7, color:colors.green }}>Sim</Label>
                                                <View style={{ marginBottom: 5 }}>
                                                    <RadioButton
                                                        color={colors.green}
                                                        value=""
                                                        status={''}
                                                        onPress={() => { }}>
                                                    </RadioButton>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: 'row'}}>
                                                <Label style={{ top: 7, color:colors.pink }}>Não</Label>
                                                <View style={{ marginBottom: 5 }}>
                                                    <RadioButton
                                                        color={colors.pink}
                                                        value=""
                                                        status={''}
                                                        onPress={() => { }}>
                                                    </RadioButton>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </Form>

                                <ContainerButton>
                                    <TouchableOpacity style={styles.btn} onPress={this.nextPage}>
                                        <BtnText>Próximo</BtnText>
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
    },
})
