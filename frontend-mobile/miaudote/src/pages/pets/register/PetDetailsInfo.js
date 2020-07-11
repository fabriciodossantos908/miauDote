import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput } from 'react-native-paper';

// import { Main, Header, Title, ContainerIcon, Form, ContainerCenter, IconView, IconImage } from './teste-styles'
import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconViewSmall, IconImage, IconViewMedium, IconViewBig } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { CheckBox } from "react-native-elements";
import { green } from "colorette";
import colors from "../../../components/colors";



export default class PetDetailsInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Tom',
            age: '',
            porte: '',
            yearSelected: false,
            monthSelected: false,
            description: ''
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
                                <Header style={{marginBottom:8}}>
                                    <Title>Cadastre seu pet</Title>
                                </Header>
                                <ContainerCenter>
                                    <ContainerIcon>
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#1bc7cb', width: '100%' }}></View>
                                    </ContainerIcon>
                                </ContainerCenter>

                                <Form style={{ alignItems: 'stretch' }}>
                                    {/* <Label style={{ fontWeight: 'bold', letterSpacing: 0.4 }}>Estamos quase finalizando!</Label> */}

                                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: '8%' }}>
                                        <View style={{}}>
                                            <Label style={{ top: 7 }}>
                                                Porte:
                                            </Label>
                                        </View>

                                        <View>
                                            <IconViewSmall onPress={this.femaleSelected}>
                                                <Icon name={'paw'} size={17} color={'#7a8b8c'}></Icon>
                                            </IconViewSmall>
                                            <TextIcon>P</TextIcon>
                                        </View>
                                        <View>
                                            <IconViewMedium onPress={this.femaleSelected} >
                                                <Icon name={'paw'} size={24} color={'#7a8b8c'}></Icon>
                                            </IconViewMedium>
                                            <TextIcon>M</TextIcon>
                                        </View>
                                        <View>
                                            <IconViewBig onPress={this.femaleSelected}>
                                                <Icon name={'paw'} size={31} color={'#7a8b8c'}></Icon>
                                            </IconViewBig>
                                            <TextIcon>G</TextIcon>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: '8%', marginBottom: '8%' }}>
                                        <View style={{ width: '30%', marginRight: '5%' }}>
                                            <TextInput
                                                style={styles.inputAge}
                                                label='Idade'
                                                mode={'outlined'}
                                                keyboardType={'numeric'}
                                                value={''}
                                                onChangeText={() => { }}
                                                theme={{
                                                    // roundness: 50,
                                                    colors: {
                                                        primary: '#1bc7cb',
                                                        underlineColor: 'transparent',
                                                    }
                                                }} />
                                        </View>
                                        <View style={{ width: '70%', flexDirection: "row", justifyContent: 'flex-end' }}>
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
                                        </View>
                                    </View>

                                    <TextInput
                                        style={styles.input}
                                        label='Cor'
                                        mode={'outlined'}
                                        keyboardType={'numeric'}
                                        value={''}
                                        onChangeText={() => { }}
                                        theme={{
                                            // roundness: 50,
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
                                    <TouchableOpacity style={styles.btn} onPress={console.log(this.state)}>
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
        marginTop:-15
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
