import colors from '../../../components/colors';
import React, { Component } from 'react';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, 
        ScrollView, StatusBar, View, FlatList, StyleSheet, Text } 
        from "react-native";

import { Label, Main, Form, ButtonNext, ContainerSearch, ContainerSearchIcon, 
        SearchInput, ListContainer } 
        from './styles';

import { ContainerButton, BtnText } from '../../user/signUp/styles';
import BreedList from './services/BreedList';
import { HeaderDecoration, Head } from './services/header';
import { IconSearch } from '../../../components/icons';



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
            name: 'Tom',

            // data: [],
            data: [
                { id: 0, full_name: 'Persa' },
                { id: 1, full_name: 'Siamês' },
                { id: 2, full_name: 'Himalaia' },
                { id: 4, full_name: 'Maine Coon' },
                { id: 5, full_name: 'Angorá' },
                { id: 6, full_name: 'Siamês' },
                { id: 7, full_name: 'Himalaia' },
                { id: 9, full_name: 'Maine Coon' },
                { id: 10, full_name: 'Angorá' },
                { id: 11, full_name: 'Siamês' },
                { id: 12, full_name: 'Himalaia' },
                { id: 14, full_name: 'Maine Coon' },
                { id: 15, full_name: 'Angorá' },
                { id: 16, full_name: 'Siamês' },
                { id: 17, full_name: 'Repo 3' },
                { id: 19, full_name: 'Maine Coon' },
            ],
            page: 1,
            loading: false,
            breed: '',
            search: '',
        };
        this.arrayholder = this.state.data
    }


    // Flatlist
    getBreed = (item) => {
        this.setState({ breed: item.full_name })
    }

    getListViewItem = (item) => {
        Alert.alert(item.full_name);
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.full_name === this.state.breed ? "#aad9e2" : "#fff";
        const color = item.full_name === this.state.breed ? "bold" : 'normal';

        return (
            // <View style={{ backgroundColor, marginTop: 10, height: 30 }}>
            <View style={{
                backgroundColor,
                width: '100%',
                height: 40,
                justifyContent: 'center',
                borderBottomWidth: 1, borderBottomColor: '#ccc'
            }}>
                <Text style={{ marginLeft: 8, fontWeight: color, fontSize: 15 }} onPress={this.getBreed.bind(this, item)}>{item.full_name}</Text>
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
        const newData = this.arrayholder.filter(function (item) {
            const itemData = item.full_name ? item.full_name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            data: newData,
            search: text,
        });
    }

    retorno = () => {
        return this.state.breed
    }

    nextPage = (props) => {

        const data = this.state

		this.props.navigation.navigate('PetDetailsInfo', {
			screen: 'PetBreed',
			params: { data },
		});
	}


    render(props) {
        console.log(this.state.breed)

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
                                    <Label>Qual a raça do {this.state.name}?
                                        <Label style={{ color: colors.green }}>{this.props.breed}</Label>
                                    </Label>
                                    <BreedList />


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
                                            // changeA={() => this.retorno.bind(this)}
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




