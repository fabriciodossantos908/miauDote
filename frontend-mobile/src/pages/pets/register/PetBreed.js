import colors from '../../../components/colors';
import React, { Component } from 'react';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput } from 'react-native-paper';

// import { Main, Header, Title, ContainerIcon, Form, ContainerCenter, IconView, IconImage } from './teste-styles'
import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconView, IconImage, List, ListContainer, ButtonNext } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';

import Constants from 'expo-constants';



// import BreedList from './component/BreedList';
import { SearchBar } from 'react-native-elements';
import BreedList from './services/BreedList';
import { HeaderDecoration, Head } from './services/header';



export default class PetBreed extends Component {

    constructor(props) {
        super(props)
        // const { data } = this.props.route.params.params
        this.state = {
            // name: data.name,
            // gender: data.gender,
            // type: data.type,
            // uf: data.uf,
            // city: data.city,
            name:'Chico',
            breed: '',
            search: ''
        }
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    nextPage = () => {
		this.props.navigation.navigate('PetDetailsInfo')
	}

    render() {
        console.log(this.state.breed, 'testeeeee')
        const { search } = this.state;
        // retorn
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
                        <HeaderDecoration />
                            <Main>
                                <Head />

                                <Form style={{ alignItems: 'stretch' }}>
                                    <Label>Qual a raça do {this.state.name}? 
                                        <Label style={{color:colors.green}}>{this.state.breed}</Label>
                                    </Label>

                                    {/* <SearchBar
                                        inputContainerStyle={{ backgroundColor: 'white', borderWidth:2, borderColor:'#ccc'}}
                                        // inputStyle={{ backgroundColor: 'white' }}
                                        containerStyle={{ backgroundColor: '#e2e2e2', borderRadius: 5 }}
                                        placeholderTextColor={'#g5g5g5'}
                                        lightTheme={true}
                                        round
                                        searchIcon={{ size: 24, color: colors.green }}
                                        onChangeText={text => this.setState({ search: text })}
                                        onClear={text => this.setState({ search: '' })}
                                        placeholder="Buscar..."
                                        value={search}
                                    /> */}

                                    {/* <ListContainer> */}
                                        <BreedList />
                                    {/* </ListContainer> */}
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




