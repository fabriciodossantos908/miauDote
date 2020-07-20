import colors from '../../../components/colors';
import React, { Component } from 'react';

import {
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
    ScrollView, StatusBar, View, FlatList, StyleSheet, Text, ActivityIndicator, TouchableOpacity
}
    from "react-native";

import {
    Label, Main, Form, ButtonNext, ContainerSearch, ContainerSearchIcon,
    SearchInput, ListContainer, UnderlinetText
}
    from './styles';

import { ContainerButton, BtnText } from '../../user/signUp/styles';
// import BreedList from './services/BreedList';
import { HeaderDecoration, Head } from './services/header';
import { IconSearch, IconArrow } from '../../../components/icons';
import { catBreed, birdBreed, dogBreed, rodentBreed, rabbitBreed } from './services/listBreed';
import { showAlertMessage } from '../../../components/alert';
import { bold } from 'colorette';


export default class PetBreed extends Component {

    constructor(props) {
        super(props)
        const { data } = this.props.route.params.params
        this.state = {
            name: data.name,
            gender: data.gender,
            type: data.type,
            selectedUf: data.selectedUf,
            selectedCity: data.selectedCity,
            data: [],
            dataBackup: [],
            loading: false,
            breed: '',
            search: '',
        };
        this.arrayholder = []
    }


    // ****** Flatlist

    componentDidMount = () => {
        const { type } = this.state
        this.state.type === 'gato' ?
            this.setState({ data: catBreed, dataBackup: catBreed }) :
            this.state.type === 'pássaro' ?
                this.setState({ data: birdBreed, dataBackup:birdBreed }) : 
                type === 'cão' ?
                this.setState({data: dogBreed, dataBackup: dogBreed}) :
                type === 'roedor' ?
                this.setState({data: rodentBreed, dataBackup: rodentBreed}) :
                type === 'coelho' ? 
                this.setState({data: rabbitBreed, dataBackup: rabbitBreed}) :
                null

        // this.arrayholder = this.state.data
    }

    getBreed = (item) => {
        this.setState({ breed: item.petBreed })
    }

    getListViewItem = (item) => {
        Alert.alert(item.petBreed);
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.petBreed === this.state.breed ? "#aad9e2" : "#fff";
        const color = item.petBreed === this.state.breed ? "bold" : 'normal';

        return (
            <View style={{
                backgroundColor,
                width: '100%',
                height: 40,
                justifyContent: 'center',
                borderBottomWidth: 1, borderBottomColor: '#ccc'
            }}>
                <Text style={{ marginLeft: 8, fontWeight: color, fontSize: 15 }} onPress={this.getBreed.bind(this, item)}>{item.petBreed}</Text>
            </View>
        )
    }
    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    };

    SearchFilterFunction(text) {
        // const newData = this.state.dataBackup.fi
        const newData = this.state.dataBackup.filter(function (item) {
            const itemData = item.petBreed ? item.petBreed.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            data: newData,
            search: text,
        });
    }

    validate = () => {
        const { breed } = this.state

        if (!breed) {
            showAlertMessage('Ops...Parece que faltou algo!', 'Preencha todos os campos para prosseguir.')
            return false
        }
        return true

    }

    noneSelected = () => {
		const text = 'Não definido'

		this.setState({ breed: text })
	}

    nextPage = (props) => {
        if (!this.validate()) return

        const data = this.state

        this.props.navigation.navigate('PetDetailsInfo', {
            screen: 'PetBreed',
            params: { data },
        });
    }

    previousPage = () => {
        this.props.navigation.goBack(null)
    }

    render(props) {
        // console.log(this.state.breed)
        console.log(this.state)

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
                            <View style={{ backgroundColor: '#fff' }}>
                                <TouchableOpacity onPress={this.previousPage}>
                                    <IconArrow />
                                </TouchableOpacity>
                            </View>
                            <Main>
                                <Head />

                                <Form style={{ alignItems: 'stretch' }}>
                                    <Label>Qual a raça do {this.state.name}?
                                        <Label style={{ color: colors.green, marginLeft:5, fontWeight:"bold" }}>{this.state.breed}</Label>
                                    </Label>

                                    <View style={{ marginTop: 10 }}>
                                        <ContainerSearch>
                                            <ContainerSearchIcon>
                                                <IconSearch />
                                            </ContainerSearchIcon>
                                            <SearchInput
                                                placeholderTextColor={colors.grey4}
                                                placeholder={'Buscar...'}
                                                value={this.state.search}
                                                onChangeText={text => this.SearchFilterFunction(text)}
                                            />
                                        </ContainerSearch>
                                    </View>

                                    <ListContainer>
                                        <FlatList
                                            teste={this.state}
                                            style={{ marginTop: 30 }}
                                            contentContainerStyle={styles.list}
                                            data={this.state.data}
                                            renderItem={this.renderItem}
                                            keyExtractor={item => item.id}
                                            onEndReached={this.loadRepositories}
                                            onEndReachedThreshold={0.1}
                                            ListFooterComponent={this.renderFooter}
                                            nestedScrollEnabled={true}
                                        />
                                    </ListContainer>

                                    <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={this.noneSelected}>
                                        <UnderlinetText>Não sei a raça do meu pet.</UnderlinetText>
                                    </TouchableOpacity>

                                </Form>
                                <ContainerButton style={{marginTop:'10%'}}>
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


const styles = StyleSheet.create({
    list: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },

    listItem: {
        backgroundColor: '#ccc',
        marginTop: 20,
        padding: 30,
    },
    loading: {
        alignSelf: 'center',
        marginVertical: 20,
    },
});




