import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput, RadioButton } from 'react-native-paper';

// import { Main, Header, Title, ContainerIcon, Form, ContainerCenter, IconView, IconImage } from './teste-styles'
import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconViewSmall, IconImage, IconViewMedium, IconViewBig, ContainerHealth, LabelHealth, DivRow, ContainerRadioButton, LabelGreen, LabelPink, ContainerQuestion, RowCenter, ButtonNext } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { CheckBox } from "react-native-elements";
import { green } from "colorette";
import colors from "../../../components/colors";
import { HeaderDecoration, Head } from "./services/header";



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
                        <HeaderDecoration />
                            <Main>
                                <Head />

                                <Form style={{ alignItems: 'stretch' }}>
                                    <ContainerHealth>
                                        <View>
                                            <LabelHealth>
                                                Vermifugado:
                                            </LabelHealth>
                                        </View>

                                        <DivRow>
                                            <LabelGreen>Sim</LabelGreen>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.green}
                                                    value="first"
                                                    status={'checked'}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </ContainerRadioButton>
                                        </DivRow>

                                        <DivRow>
                                            <LabelPink>Não</LabelPink>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </ContainerRadioButton>
                                        </DivRow>

                                    </ContainerHealth>

                                    <ContainerHealth style={{ marginTop: '8%' }}>
                                        <View>
                                            <LabelHealth>
                                                Vacinado:
                                            </LabelHealth>
                                        </View>

                                        <DivRow style={{ left:13 }}>
                                            <LabelGreen>Sim</LabelGreen>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.green}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </ContainerRadioButton>
                                        </DivRow>

                                        <DivRow>
                                            <LabelPink>Não</LabelPink>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </ContainerRadioButton>
                                        </DivRow>
                                    </ContainerHealth>

                                    <ContainerHealth style={{ marginTop: '8%' }}>
                                        <View>
                                            <LabelHealth>
                                                Castrado:
                                            </LabelHealth>
                                        </View>

                                        <DivRow style={{ left:13 }}>
                                            <LabelGreen>Sim</LabelGreen>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.green}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </ContainerRadioButton>
                                        </DivRow>

                                        <DivRow>
                                            <LabelPink>Não</LabelPink>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value=""
                                                    status={''}
                                                    onPress={() => { }}
                                                >
                                                </RadioButton>
                                            </ContainerRadioButton>
                                        </DivRow>

                                    </ContainerHealth>


                                    <ContainerQuestion>
                                        <Label>O Pet está precisando de cuidados veterinários?</Label>

                                        <RowCenter>
                                            <DivRow>
                                                <LabelGreen>Sim</LabelGreen>
                                                <ContainerRadioButton>
                                                    <RadioButton
                                                        color={colors.green}
                                                        value=""
                                                        status={''}
                                                        onPress={() => { }}>
                                                    </RadioButton>
                                                </ContainerRadioButton>
                                            </DivRow>

                                            <DivRow>
                                                <LabelPink>Não</LabelPink>
                                                <ContainerRadioButton>
                                                    <RadioButton
                                                        color={colors.pink}
                                                        value=""
                                                        status={''}
                                                        onPress={() => { }}>
                                                    </RadioButton>
                                                </ContainerRadioButton>
                                            </DivRow>
                                        </RowCenter>
                                    </ContainerQuestion>
                                </Form>

                                <ContainerButton>
                                    <ButtonNext onPress={this.nextPage}>
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
