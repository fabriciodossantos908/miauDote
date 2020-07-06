import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';

import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    StatusBar,
} from "react-native";


import {
    Main,
    Tittle,
    Container,
    SubTittle,
    IconContainer,
    ContainerCenter,
    Form,
    Label,
    IconGender,
    GenderView,
    TextGender,
    ContainerGender,
    UnderlinetText,
    NextButton,
    TextButton
} from './styles';

export default class Step1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <React.Fragment>

                <StatusBar barStyle={'light-content'} backgroundColor='#000' />
                <SafeAreaView style={{ flex: 1 }}>

                    <KeyboardAvoidingView
                        // behavior={Platform.OS == "ios" ? "padding" : "height"}
                        behavior={"height"}
                        style={{ flex: 1, backgroundColor: '#fff' }}
                    >
                        <ScrollView>

                            <ImageBackground source={require('../../../assets/header-pet-register.png')} style={{ height: 163 }} imageStyle={{ resizeMode: 'cover' }} />
                            <Main>
                                <ContainerCenter>
                                    <SubTittle>Que bom que você tomou essa decisão!</SubTittle>
                                    <IconContainer>
                                        <Icon name="paw" size={18} color="#ccc"> </Icon>
                                        <Icon name="paw" size={18} color="#ccc"> </Icon>
                                        <Icon name="paw" size={18} color="#ccc"> </Icon>
                                    </IconContainer>
                                </ContainerCenter>


                                <Form >
                                    <Label>Informe o nome do seu pet:</Label>

                                    <TextInput
                                        style={styles.input}
                                        label='Nome'
                                        mode={'outlined'}
                                        value={this.state.name || ''}
                                        onChangeText={() => { }}
                                        theme={{
                                            // roundness: 50,
                                            colors: {
                                                primary: '#1bc7cb',
                                                underlineColor: 'transparent',
                                            }
                                        }} />

                                    <Label>Qual o sexo do pet?</Label>

                                    <ContainerGender>
                                        <View>
                                            <GenderView style={{ backgroundColor: '#60BDEF' }}>
                                                <IconGender source={require('../../../assets/male.png')} ></IconGender>
                                            </GenderView>
                                            <TextGender>macho</TextGender>
                                        </View>

                                        <View>
                                            <GenderView style={{ backgroundColor: '#F68E90' }}>
                                                <IconGender source={require('../../../assets/female.png')} ></IconGender>
                                            </GenderView>
                                            <TextGender>Fêmea</TextGender>
                                        </View>
                                    </ContainerGender>

                                    <TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 10 }}>
                                        <UnderlinetText>Sexo não identificado</UnderlinetText>
                                    </TouchableOpacity>

                                    <NextButton>
                                        <TextButton>Próximo</TextButton>
                                    </NextButton>

                                </Form>
                            </Main>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </React.Fragment>


        )
    }
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        marginBottom: 60,
        marginTop: 10
    }
})