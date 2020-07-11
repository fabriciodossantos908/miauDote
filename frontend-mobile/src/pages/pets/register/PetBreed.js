import colors from '../../../components/colors';
import React, { Component } from 'react';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput } from 'react-native-paper';

// import { Main, Header, Title, ContainerIcon, Form, ContainerCenter, IconView, IconImage } from './teste-styles'
import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconView, IconImage } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';



// import BreedList from './component/BreedList';
import { SearchBar } from 'react-native-elements';
import BreedList from './services/BreedList';



export default class PetBreed extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Tom',
            breed: '',
            search: ''
        }
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        console.log(this.state)
        const { search } = this.state;
        return (
            // <View style={{flex:1}}>
            // <Label>TESTEEEEEEEEEEEEEEEE</Label>
            //     
            // </View>
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
                                <Header>
                                    <Title>Cadastre seu pet</Title>
                                </Header>
                                <ContainerCenter>
                                    <ContainerIcon>
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#1bc7cb', width: '100%' }}></View>
                                    </ContainerIcon>
                                </ContainerCenter>

                                <Form style={{ alignItems: 'stretch' }}>
                                    <Label>Qual a raça do {this.state.name}?</Label>

                                    <SearchBar
                                        inputContainerStyle={{ backgroundColor: 'white' }}
                                        // inputStyle={{ backgroundColor: 'white' }}
                                        containerStyle={{ backgroundColor: '#c78', borderRadius: 5 }}
                                        placeholderTextColor={'#g5g5g5'}
                                        lightTheme={true}
                                        round
                                        searchIcon={{ size: 24, color:'#c78' }}
                                        onChangeText={text => this.setState({ search: text })}
                                        onClear={text => this.setState({ search: '' })}
                                        placeholder="Type Here..."
                                        value={search}
                                    />
                                    {/* <BreedList /> */}

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
        borderRadius: 5
    },

    input: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        marginBottom: 60,
        marginTop: 10
    },
})




