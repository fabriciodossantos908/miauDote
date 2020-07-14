import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, StatusBar, Alert } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput } from 'react-native-paper';

import { TextIcon, Label, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconViewSmall, IconViewMedium, IconViewBig, ContainerPetDetails, ContainerCheckbox, ButtonNext, ContainerPetAge, DivInputAge } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { CheckBox } from "react-native-elements";
import colors from "../../../components/colors";
import { HeaderDecoration, Head } from "./services/header";
import { IconPawSmall, IconPawMedium, IconPawBig, IconPawSmallDisable, IconPawMediumDisable, IconPawBigDisable, Heart, IconPin } from "../../../components/icons";

import { showMessage, hideMessage } from "react-native-flash-message";
import { showAlertMessage } from "../../../components/alert";

export default class PetDetailsInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Tom',
            age: '',
            ageNumber: '',
            month_year: null,
            porte: null,
            yearSelected: false,
            monthSelected: false,
            color:'',
            description: ''
        }
    }

    nextPage = () => {
        // console.log(this.state)
        this.props.navigation.navigate('PetHealth')
    }

    // showMessage = () => ({
    //     message: "Hello World",
    //     description: "This is our second message",
    //     type: "success",
    // });

    showAlert = () => {
        showAlertMessage('Ops! Preencha o campo', 'Preencha o campo de idade primero, e depois você poderá selecionar este campo. ☺')
    }

    
    _onYearPress = () => {
        const { yearSelected, age, ageNumber } = this.state

        if (ageNumber != '') {
            yearSelected == false ?
                this.setState({ yearSelected: true, age: ageNumber + ' anos' }) +
                this.setState({ monthSelected: false }) :
                this.setState({ yearSelected: false, age: ageNumber + '' })
        } else {
            this.showAlert()
        }
    }

    _onMonthPress = () => {
        const { monthSelected, ageNumber } = this.state

        if (ageNumber != '') {
            monthSelected == false ?
                this.setState({ monthSelected: true, age: ageNumber + ' meses' }) +
                this.setState({ yearSelected: false }) :
                this.setState({ monthSelected: false, age: ageNumber + '' })
        }else{
            this.showAlert()
        }
    }

    petAge = () => {
        const { monthSelected, yearSelected, age, ageNumber } = this.state

        monthSelected === true ?
            this.setState({ age: ageNumber + 'meses' }) :
            yearSelected === true ?
                this.setState({ age: ageNumber + 'anos' }) :
                ''

    }

    render() {

        console.log(this.state)

        const { porte } = this.state

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
                                    <ContainerPetDetails>
                                        <View>
                                            <Label style={{ top: 7 }}>
                                                Selecione o porte:
                                            </Label>
                                        </View>
                                        <View>
                                            <IconViewSmall onPress={() => this.setState({ porte: 'p' })}>
                                                {porte == null ||
                                                    porte === 'p' ?
                                                    <IconPawSmall /> :
                                                    <IconPawSmallDisable />
                                                }
                                            </IconViewSmall>
                                            <TextIcon>P</TextIcon>
                                        </View>
                                        <View>
                                            <IconViewMedium onPress={() => this.setState({ porte: 'm' })} >
                                                {porte == null ||
                                                    porte === 'm' ?
                                                    <IconPawMedium /> :
                                                    <IconPawMediumDisable />
                                                }
                                            </IconViewMedium>
                                            <TextIcon>M</TextIcon>
                                        </View>
                                        <View>
                                            <IconViewBig onPress={() => this.setState({ porte: 'g' })}>
                                                {porte == null ||
                                                    porte === 'g' ?
                                                    <IconPawBig /> :
                                                    <IconPawBigDisable />
                                                }
                                            </IconViewBig>
                                            <TextIcon>G</TextIcon>
                                        </View>
                                    </ContainerPetDetails>

                                    <ContainerPetAge>
                                        <DivInputAge>
                                            <TextInput
                                                style={styles.inputAge}
                                                label='Idade'
                                                mode={'outlined'}
                                                keyboardType={'numeric'}
                                                value={this.state.ageNumber}
                                                onChangeText={(txt) => this.setState({ ageNumber: txt })}
                                                theme={{
                                                    colors: {
                                                        primary: '#1bc7cb',
                                                        underlineColor: 'transparent',
                                                    }
                                                }} />
                                        </DivInputAge>
                                        <ContainerCheckbox>
                                            <CheckBox
                                                title='Meses'
                                                size={18}
                                                containerStyle={{ height: 40 }}
                                                checked={this.state.monthSelected}
                                                checkedColor={colors.green}
                                                onPress={this._onMonthPress}


                                            />
                                            <CheckBox
                                                title='Anos'
                                                size={18}
                                                containerStyle={{ height: 40 }}
                                                checked={this.state.yearSelected}
                                                checkedColor={colors.green}
                                                onPress={this._onYearPress}
                                            />
                                        </ContainerCheckbox>
                                    </ContainerPetAge>

                                    <TextInput
                                        style={styles.input}
                                        label='Cor'
                                        mode={'outlined'}
                                        value={this.state.color}
                                        onChangeText={txt => this.setState({color: txt})}
                                        theme={{
                                            colors: {
                                                primary: '#1bc7cb',
                                                underlineColor: 'transparent',
                                            }
                                        }} />

                                    {/* {this.state.color != '' ? <IconPin /> : null} */}
                                    <Label>Fale um pouco sobre o {this.state.name} para nós</Label>

                                    <TextInput
                                        style={styles.inputLarge}
                                        multiline={true}
                                        numberOfLines={4}
                                        label='Descrição'
                                        mode={'outlined'}
                                        maxLength={200}
                                        value={this.state.description || ''}
                                        onChangeText={txt => this.setState({ description: txt })}
                                        theme={{
                                            colors: {
                                                primary: '#1bc7cb',
                                                underlineColor: 'transparent',
                                            }
                                        }} />

                                </Form>

                                <ContainerButton>
                                    <ButtonNext style={{ marginTop: -17 }} onPress={this.nextPage}>
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

const styles = StyleSheet.create({
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
        alignSelf: 'stretch',
        marginTop: 10
    },
    checkbox: {
        alignSelf: "center",
    },
})
