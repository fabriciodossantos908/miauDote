import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-paper';
import { ContainerRow, TextIcon, Label, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconView, IconImage } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import colors from '../../../components/colors'

export default class PetType extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: '',
            uf: '',
            city: '',
        }
    }

    nextPage = () => {
		// console.log(this.state)
		this.props.navigation.navigate('Teste')
	}

    // specieSelected = () => {
    // 	this.state.gender = 'M'
    // }


    // mudando a cor do botão ao clicar
    // onButtonPress = () => {
    // 	const text = 'M'
    // 	const check = '../../../assets/check.png'

    //     this.state.gender = text
    // 	this.setState({ buttonColor: '#ccc' })
    // 	// this.setState({ icon: check})
    // }


    render() {
        return (
            <React.Fragment>

                <StatusBar barStyle={'light-content'} backgroundColor={colors.pink} />
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
                                    <ContainerIcon style={{bottom: 25}}>
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: colors.green, width: '100%' }}></View>
                                    </ContainerIcon>
                                </ContainerCenter>

                                <Form style={{top:20}}>
                                    <Label>Qual o tipo do seu pet?</Label>

                                    <ContainerRow style={{ justifyContent: "space-around" }}>
                                        <View>
                                            <IconView onPress={this.maleSelected}>
                                                <IconImage style={{ height: 70, width: 70 }} source={require('../../../assets/type-dog.png')} ></IconImage>
                                            </IconView>
                                            <TextIcon>Cão</TextIcon>
                                        </View>

                                        <View>
                                            <IconView onPress={this.femaleSelected}>
                                                <IconImage style={{ height: 70, width: 70 }} source={require('../../../assets/type-cat.png')} ></IconImage>
                                            </IconView>
                                            <TextIcon>Gato</TextIcon>
                                        </View>

                                        <View>
                                            <IconView onPress={this.femaleSelected}>
                                                <IconImage style={{ height: 70, width: 70 }} source={require('../../../assets/type-bird.png')} ></IconImage>
                                            </IconView>
                                            <TextIcon>Pássaro</TextIcon>
                                        </View>

                                    </ContainerRow>

                                    <ContainerRow >
                                        <View>
                                            <IconView onPress={this.femaleSelected}>
                                                <IconImage style={{ height: 70, width: 70 }} source={require('../../../assets/type-rabbit.png')} ></IconImage>
                                            </IconView>
                                            <TextIcon>Coelho</TextIcon>
                                        </View>
                                        <View>
                                            <IconView onPress={this.femaleSelected}>
                                                <IconImage style={{ height: 70, width: 70 }} source={require('../../../assets/type-hamster.png')} ></IconImage>
                                            </IconView>
                                            <TextIcon>Roedor</TextIcon>
                                        </View>
                                    </ContainerRow>

                                    <View style={{ marginTop: '15%', alignSelf: 'flex-start', width: '100%' }}>
                                        <Label>Localização do pet <Icon name={'location-on'} color={'#F95F62'} size={24}></Icon></Label>

                                        <View style={{flexDirection:'row'}}>
                                            <TextInput
                                                style={styles.inputSmall}
                                                label='Estado'
                                                mode={'outlined'}
                                                value={this.state.uf || ''}
                                                onChangeText={txt => this.setState({uf: txt})}
                                                theme={{
                                                    colors: {
                                                        primary: colors.green,
                                                        underlineColor: 'transparent',
                                                    }
                                                }} />

                                            <TextInput
                                                style={styles.input}
                                                label='Cidade'
                                                mode={'outlined'}
                                                value={this.state.city || ''}
                                                onChangeText={txt => this.setState({city: txt})}
                                                theme={{
                                                    colors: {
                                                        primary: colors.green,
                                                        underlineColor: 'transparent',
                                                    }
                                                }} />
                                        </View>



                                    </View>

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
        borderRadius: 5,
    },

    inputSmall: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        marginTop: 10,
        width: '30%',
        marginRight:10
    },

    input: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        // marginBottom: 60,
        marginTop: 10,
        width: '65%'
    },
})



