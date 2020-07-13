import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput } from 'react-native-paper';

import { TextIcon, Label, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconViewSmall, IconViewMedium, IconViewBig, ContainerPetDetails, ContainerCheckbox, ButtonNext, ContainerPetAge, DivInputAge } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { CheckBox } from "react-native-elements";
import colors from "../../../components/colors";
import { HeaderDecoration, Head } from "./services/header";
import { IconPawSmall, IconPawMedium, IconPawBig, IconPawSmallDisable, IconPawMediumDisable, IconPawBigDisable } from "../../../components/icons";



export default class PetDetailsInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Tom',
            age: '',
            porte: null,
            yearSelected: false,
            monthSelected: false,
            description: ''
        }
    }

    nextPage = () => {
        // console.log(this.state)
        this.props.navigation.navigate('PetHealth')
    }

    _onYearPress = () => {
        const { yearSelected } = this.state

        yearSelected == false ?
            this.setState({ yearSelected: true }) +
            this.setState({ monthSelected: false }) :
            this.setState({ yearSelected: false })
    }

    _onMonthPress = () => {
        const { monthSelected } = this.state

        monthSelected == false ?
            this.setState({ monthSelected: true }) +
            this.setState({ yearSelected: false }) :
            this.setState({ monthSelected: false })
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
                                                value={this.state.age}
                                                onChangeText={(txt) => this.setState({ age: txt })}
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
                                        keyboardType={'numeric'}
                                        value={''}
                                        onChangeText={() => { }}
                                        theme={{
                                            colors: {
                                                primary: '#1bc7cb',
                                                underlineColor: 'transparent',
                                            }
                                        }} />


                                    <Label>Fale um pouco sobre o {this.state.name} para nós</Label>

                                    <TextInput
                                        style={styles.inputLarge}
                                        multiline={true}
                                        numberOfLines={4}
                                        label='Descrição'
                                        mode={'outlined'}
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
