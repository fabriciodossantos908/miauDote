import React, { Component } from "react";

import { CheckBox } from "react-native-elements";
import colors from "../../../components/colors";
import { HeaderDecoration, Head } from "./services/header";
import { _lettersAndChar } from "../../../services/regex";
import { TextInput, HelperText } from 'react-native-paper';
import { showAlertMessage } from "../../../components/alert";
import { ContainerButton, BtnText } from '../../user/signUp/styles';

import { KeyboardAvoidingView, TouchableWithoutFeedback, 
        Keyboard, ScrollView, StyleSheet, 
        View, StatusBar } from "react-native";

import { TextIcon, Label, Main, Form, IconViewSmall, 
        IconViewMedium, IconViewBig, ContainerPetDetails, 
        ContainerCheckbox, ButtonNext, ContainerPetAge, DivInputAge } from './styles';

import { IconPawSmall, IconPawMedium, IconPawBig, 
        IconPawSmallDisable, IconPawMediumDisable, 
        IconPawBigDisable } from "../../../components/icons";



export default class PetDetailsInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Tom',
            age: '',
            ageNumber: '',
            porte: null,
            yearSelected: false,
            monthSelected: false,
            color: '',
            description: ''
        }
        
    }

    nextPage = () => {
        // console.log(this.state)
        this.props.navigation.navigate('PetHealth')
    }


    showAlert = () => {
        showAlertMessage('Ops! Preencha o campo', 'Preencha o campo de idade primero, e depois você poderá selecionar este campo. ☺')
    }


    _onYearPress = () => {
        const { yearSelected, ageNumber } = this.state

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
        } else {
            this.showAlert()
        }
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
                                        maxLength={15}
                                        // error={!this._onlyLetters(this.state.color)}
                                        error={!_lettersAndChar(this.state.color)}
                                        onChangeText={txt => this.setState({ color: txt })}
                                        theme={{
                                            colors: {
                                                primary: colors.green,
                                                underlineColor: 'transparent',
                                            }
                                        }}
                                    />
                                    <View style={styles.helpersWrapper}>
                                        <HelperText
                                            type="error"
                                            // visible={!this._onlyLetters(this.state.color)}
                                            visible={!_lettersAndChar(this.state.color)}
                                            style={styles.helper}
                                        >
                                            Ops: Apenas letras e (',' '-' '/') são permitidos
                                        </HelperText>
                                        <HelperText visible style={styles.counterHelper}>
                                            {this.state.color.length} / {15}
                                        </HelperText>
                                    </View>

                                    {/* {this.state.color != '' ? <IconPin /> : null} */}
                                    <Label style={{top:25}}>Fale um pouco sobre o {this.state.name} para nós</Label>

                                    <TextInput
                                        style={styles.textArea}
                                        multiline={true}
                                        numberOfLines={4}
                                        label='Descrição'
                                        mode={'outlined'}
                                        maxLength={255}
                                        value={this.state.description || ''}
                                        onChangeText={txt => this.setState({ description: txt })}
                                        theme={{
                                            colors: {
                                                primary: '#1bc7cb',
                                                underlineColor: 'transparent',
                                            }
                                        }}
                                    />
                                    <View>
                                        <HelperText visible style={styles.counterHelper}>
                                            {this.state.description.length} / {255}
                                        </HelperText>
                                    </View>

                                    {/* <Text style={{ alignSelf: 'flex-end' }}>{this.state.description.length}/255</Text> */}

                                </Form>

                                <ContainerButton>
                                    <ButtonNext style={{ marginTop:-40}} onPress={this.nextPage}>
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
        marginTop: 10
    },
    textArea: {
        backgroundColor: '#ffff',
        alignSelf: 'stretch',
        marginTop: 20
    },
    checkbox: {
        alignSelf: "center",
    },
    helpersWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    counterHelper: {
        textAlign:'right'
    },

})
