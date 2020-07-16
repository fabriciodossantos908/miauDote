import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar, Text } from "react-native";
import { TextInput } from 'react-native-paper';
import { ContainerRow, TextIcon, Label, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconView, IconPetType, ContainerPetLocal, ButtonNext } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import colors from '../../../components/colors'
import { HeaderDecoration, Head } from './services/header';
import { IconPin, IconDog, IconCat, IconBird, IconRabbit, IconHamster, IconDogDisable, IconCatDisable, IconBirdDisable, IconRabbitDisable, IconHamsterDisable } from "../../../components/icons";
// import removerAcentos from '../../../services/Regex';



export default class PetType extends Component {

    constructor(props) {
        super(props)
        const { data } = this.props.route.params.params
        this.state = {
            name: data.name,
            gender: data.gender,
            type: null,
            uf: '',
            city: '',
            font: 'bold'
        }
    }


    nextPage = () => {
        const data = this.state

		this.props.navigation.navigate('PetBreed', {
			screen: 'PetType',
			params: {data},
		});
    }

    FontBold = () => {
		const { type } = this.state
		type === 'cão' ? 'bold' : 'normal'
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


    // função para remover acento
    // teste = () => {
    //     let txt = 'cão'
    //     let result = removerAcentos(txt)
    //     alert(result)
        
    // }

    _removerAcentos = () => {
        // let txt = 'cão'
        const { type } = this.state
        let txt = type

        let result = removerAcentos(txt)
        alert(result)
    }



    render() {
        console.log(this.state)
        const{ type } = this.state

        const bold = 'bold'
        const normal = 'normal'

        let FontDog = type === 'cão'  ? bold : normal
        let FontCat = type === 'gato' ? bold : normal
        let FontBird = type === 'pássaro'  ? bold : normal
        let FontRabbit = type === 'coelho'  ? bold : normal
        let FontRodent = type === 'roedor'  ? bold : normal

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
                            {/* <ImageBackground source={require('../../../assets/head.png')} style={{ height: 50 }} imageStyle={{ resizeMode: 'cover' }} /> */}
                            <HeaderDecoration />
                            <Main>
                                <Head />

                                <Form style={{ top: 20 }}>
                                    <Label>Qual o tipo do seu pet?  
                                        <Text style={{color:colors.green, fontWeight:'bold'}}> {type} </Text>
                                    </Label>

                                    <ContainerRow style={{ justifyContent: "space-around" }}>
                                        <View>
                                            <IconView onPress={() => this.setState({type:'cão'})}>
                                                {/* <IconDog /> */}
                                                {type === null || type === 'cão' ? <IconDog /> : <IconDogDisable />}
                                            </IconView>
                                            <TextIcon style={{fontWeight: FontDog}}>Cão</TextIcon>
                                        </View>

                                        <View>
                                            <IconView onPress={() => this.setState({type:'gato'})}>
                                                {/* <IconCat /> */}
                                                {type === null || type === 'gato' ? <IconCat /> : <IconCatDisable />}
                                            </IconView>
                                            <TextIcon style={{fontWeight: FontCat}}>Gato</TextIcon>
                                        </View>

                                        <View>
                                            <IconView onPress={() => this.setState({type:'pássaro'})}>
                                            {type === null || type === 'pássaro' ? <IconBird /> : <IconBirdDisable />}
                                            </IconView>
                                            <TextIcon style={{fontWeight: FontBird}}>Pássaro</TextIcon>
                                        </View>

                                    </ContainerRow>

                                    <ContainerRow >
                                        <View>
                                            <IconView onPress={() => this.setState({type:'coelho'})}>
                                            {type === null || type === 'coelho' ? <IconRabbit /> : <IconRabbitDisable />}
                                            </IconView>
                                            <TextIcon style={{fontWeight: FontRabbit}}>Coelho</TextIcon>
                                        </View>
                                        <View>
                                            <IconView onPress={() => this.setState({type:'roedor'})}>
                                            {type === null || type === 'roedor' ? <IconHamster /> : <IconHamsterDisable />}
                                            </IconView>
                                            <TextIcon style={{fontWeight: FontRodent}}>Roedor</TextIcon>
                                        </View>
                                    </ContainerRow>

                                    <ContainerPetLocal>
                                        <Label>Localização do pet <IconPin /> </Label>

                                        <View style={{ flexDirection: 'row' }}>
                                            <TextInput
                                                style={styles.inputSmall}
                                                label='Estado'
                                                mode={'outlined'}
                                                value={this.state.uf}
                                                onChangeText={txt => this.setState({ uf: txt })}
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
                                                onChangeText={txt => this.setState({ city: txt })}
                                                theme={{
                                                    colors: {
                                                        primary: colors.green,
                                                        underlineColor: 'transparent',
                                                    }
                                                }} />
                                        </View>
                                    </ContainerPetLocal>
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
    inputSmall: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        marginTop: 10,
        width: '30%',
        marginRight: 10
    },

    input: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        marginTop: 10,
        width: '65%'
    },
})



