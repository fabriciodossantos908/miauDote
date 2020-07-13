// *********** CLASS ROCKETSEATR ****************//
import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { ListContainer } from '../styles';
import { SearchBar, colors } from 'react-native-elements';

export default class BreedList extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

    // componentDidMount() {
    //     this.loadRepositories();
    // }

    // loadRepositories = async () => {
    //     const baseURL = 'https://api.github.com';
    //     const searchTerm = 'react';
    //     const perPage = 20;

    //     if (this.state.loading) return;

    //     const { page } = this.state;

    //     this.setState({ loading: true });

    //     const response = await fetch(`${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`);
    //     const repositories = await response.json();

    //     this.setState({
    //         data: [...this.state.data, ...repositories.items],
    //         page: page + 1,
    //         loading: false,
    //     });
    // }

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

    // filterSearch(text) {
    //     const newData = this.arrayholder.filter((item) => {
    //         const itemData = item.full_name.first.toUpperCase()
    //         const textData = text.toUpperCase()
    //         return itemData.indexOf(textData) > -1
    //     });
    //     this.setState({
    //         text: text,
    //         users: newData // after filter we are setting users to new array
    //     });
    // }

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


    render() {
        console.log(this.state.breed, this.state.search)

        return (
            <>
                <SearchBar
                    inputContainerStyle={{ backgroundColor: 'white', borderWidth: 2, borderColor: '#ccc' }}
                    // inputStyle={{ backgroundColor: 'white' }}
                    containerStyle={{ backgroundColor: '#e2e2e2', borderRadius: 5 }}
                    placeholderTextColor={'#g5g5g5'}
                    lightTheme={true}
                    round
                    searchIcon={{ size: 24, color: colors.grey3 }}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    onClear={text => this.setState({ search: '' })}
                    placeholder="Buscar..."
                    value={this.state.search}
                />

                <ListContainer>
                    <FlatList
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
            </>
        );
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