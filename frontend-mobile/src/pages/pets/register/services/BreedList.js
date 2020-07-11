// *********** CLASS ROCKETSEATR ****************//
import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, Alert, ActivityIndicator } from 'react-native';

export default class BreedList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1,
            loading: false,
            breed: ''
        };
    }
   

    componentDidMount() {
        this.loadRepositories();
    }

    loadRepositories = async () => {
        const baseURL = 'https://api.github.com';
        const searchTerm = 'react';
        const perPage = 20;

        if (this.state.loading) return;

        const { page } = this.state;

        this.setState({ loading: true });

        const response = await fetch(`${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`);
        const repositories = await response.json();

        this.setState({
            data: [...this.state.data, ...repositories.items],
            page: page + 1,
            loading: false,
        });
    }

    getBreed = (item) => {
        this.setState({ breed: item.full_name })
    }

    getListViewItem = (item) => {
        Alert.alert(item.full_name);
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.full_name === this.state.breed ? "#6e3b6e" : "#f9c2ff";
        const color = item.full_name === this.state.breed ? "bold" : 'normal';

        return (
            <View style={{ backgroundColor, marginTop: 20, height: 30 }}>
                <Text style={{fontWeight:color}} onPress={this.getBreed.bind(this, item)}>{item.full_name}</Text>
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

    render() {
        console.log(this.state.breed)

        return (
            <FlatList
                style={{ marginTop: 30 }}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                onEndReached={this.loadRepositories}
                onEndReachedThreshold={0.1}
                ListFooterComponent={this.renderFooter}
            />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20,
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